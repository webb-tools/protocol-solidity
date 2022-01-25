/**
 * Copyright 2021 Webb Technologies
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
 const assert = require('assert');
 const path = require('path');
 import { ethers } from 'hardhat';
 import { BigNumber } from 'ethers';
 const TruffleAssert = require('truffle-assertions');
 
 // Convenience wrapper classes for contract classes
 import { Verifier, SignatureBridgeSide } from '@webb-tools/bridges';
 import { Anchor, AnchorHandler } from '@webb-tools/anchors';
 import { MintableToken } from '@webb-tools/tokens';
 import { fetchComponentsFromFilePaths, ZkComponents } from '@webb-tools/utils';
 import { PoseidonT3__factory } from '@webb-tools/contracts';
 import { GovernedTokenWrapper, TokenWrapperHandler } from '@webb-tools/tokens';
 
 describe('SignatureBridgeSideConstruction', () => {
 
   let zkComponents: ZkComponents;
 
   before(async () => {
     zkComponents = await fetchComponentsFromFilePaths(
       path.resolve(__dirname, '../../protocol-solidity-fixtures/fixtures/bridge/2/poseidon_bridge_2.wasm'),
       path.resolve(__dirname, '../../protocol-solidity-fixtures/fixtures/bridge/2/witness_calculator.js'),
       path.resolve(__dirname, '../../protocol-solidity-fixtures/fixtures/bridge/2/circuit_final.zkey')
     );
   })
 
   it('should create the signature bridge side which can affect the anchor state', async () => {
     const signers = await ethers.getSigners();
     const initialGovernor = signers[1];
     const admin = signers[1];
     const bridgeSide = await SignatureBridgeSide.createBridgeSide(initialGovernor.address, 0, 100, admin);
   })

   it('should set resource with signature', async () => {
    const signers = await ethers.getSigners();
    const initialGovernor = signers[1];
    const admin = signers[1];
    const bridgeSide = await SignatureBridgeSide.createBridgeSide(initialGovernor.address, 0, 100, admin);

    // Create the Hasher and Verifier for the chain
    const hasherFactory = new PoseidonT3__factory(admin);
    let hasherInstance = await hasherFactory.deploy({ gasLimit: '0x5B8D80' });
    await hasherInstance.deployed();

    const verifier = await Verifier.createVerifier(admin);

    const tokenInstance = await MintableToken.createToken('testToken', 'TEST', admin);
    await tokenInstance.mintTokens(admin.address, '100000000000000000000000');

    const anchorHandler = await AnchorHandler.createAnchorHandler(bridgeSide.contract.address, [], [], admin);

    const anchor = await Anchor.createAnchor(
      verifier.contract.address,
      hasherInstance.address,
      '1000000000000',
      30,
      tokenInstance.contract.address,
      anchorHandler.contract.address,
      5,
      zkComponents,
      admin
    );

    await tokenInstance.approveSpending(anchor.contract.address);

    await bridgeSide.setAnchorHandler(anchorHandler);
    // //Function call below sets resource with signature
    await bridgeSide.connectAnchorWithSignature(anchor);
    //Check that proposal nonce is updated on anchor contract since handler prposal has been executed
    assert.strictEqual(await anchor.contract.getProposalNonce(), 1);
  })
 
  it('execute anchor proposal', async () => {
    const signers = await ethers.getSigners();
    const initialGovernor = signers[1];
    const admin = signers[1];
    const bridgeSide = await SignatureBridgeSide.createBridgeSide(initialGovernor.address, 0, 100, admin);

    // Create the Hasher and Verifier for the chain
    const hasherFactory = new PoseidonT3__factory(admin);
    let hasherInstance = await hasherFactory.deploy({ gasLimit: '0x5B8D80' });
    await hasherInstance.deployed();

    const verifier = await Verifier.createVerifier(admin);

    const tokenInstance = await MintableToken.createToken('testToken', 'TEST', admin);
    await tokenInstance.mintTokens(admin.address, '100000000000000000000000');

    const anchorHandler = await AnchorHandler.createAnchorHandler(bridgeSide.contract.address, [], [], admin);

    const sourceAnchor = await Anchor.createAnchor(
      verifier.contract.address,
      hasherInstance.address,
      '1000000000000',
      30,
      tokenInstance.contract.address,
      anchorHandler.contract.address,
      5,
      zkComponents,
      admin
    );

    const destAnchor = await Anchor.createAnchor(
      verifier.contract.address,
      hasherInstance.address,
      '1000000000000',
      30,
      tokenInstance.contract.address,
      anchorHandler.contract.address,
      5,
      zkComponents,
      admin
    );

    await tokenInstance.approveSpending(destAnchor.contract.address);
    await tokenInstance.approveSpending(sourceAnchor.contract.address);

    await bridgeSide.setAnchorHandler(anchorHandler);
    bridgeSide.setResourceWithSignature(destAnchor);
    await sourceAnchor.deposit(await admin.getChainId());
    const destResourceID = await destAnchor.createResourceId();
    await bridgeSide.executeAnchorProposalWithSig(sourceAnchor, destResourceID);
  })

  it('execute fee proposal', async () => {
    const signers = await ethers.getSigners();
    const initialGovernor = signers[1];
    const admin = signers[1];
    const bridgeSide = await SignatureBridgeSide.createBridgeSide(initialGovernor.address, 0, 100, admin);

    //Deploy TokenWrapperHandler
    const tokenWrapperHandler = await TokenWrapperHandler.createTokenWrapperHandler(bridgeSide.contract.address, [], [], admin);

    //Create a GovernedTokenWrapper
    const governedToken = await GovernedTokenWrapper.createGovernedTokenWrapper(
      `webbETH-test-1`,
      `webbETH-test-1`,
      tokenWrapperHandler.contract.address,
      '10000000000000000000000000',
      false,
      admin,
    );

    //Set bridgeSide handler to tokenWrapperHandler
    bridgeSide.setTokenWrapperHandler(tokenWrapperHandler);
    //Connect resourceID of GovernedTokenWrapper with TokenWrapperHandler
    await bridgeSide.setGovernedTokenResourceWithSignature(governedToken);
    //Execute change fee proposal
    await bridgeSide.executeFeeProposalWithSig(governedToken, 5);
    //Check that fee actually changed
    assert.strictEqual((await governedToken.contract.getFee()).toString(), '5');
  })

  it('execute cannot set fee > 100', async () => {
    const signers = await ethers.getSigners();
    const initialGovernor = signers[1];
    const admin = signers[1];
    const bridgeSide = await SignatureBridgeSide.createBridgeSide(initialGovernor.address, 0, 100, admin);

    //Deploy TokenWrapperHandler
    const tokenWrapperHandler = await TokenWrapperHandler.createTokenWrapperHandler(bridgeSide.contract.address, [], [], admin);

    //Create a GovernedTokenWrapper
    const governedToken = await GovernedTokenWrapper.createGovernedTokenWrapper(
      `webbETH-test-1`,
      `webbETH-test-1`,
      tokenWrapperHandler.contract.address,
      '10000000000000000000000000',
      false,
      admin,
    );

    //Set bridgeSide handler to tokenWrapperHandler
    bridgeSide.setTokenWrapperHandler(tokenWrapperHandler);

    //Connect resourceID of GovernedTokenWrapper with TokenWrapperHandler
    await bridgeSide.setGovernedTokenResourceWithSignature(governedToken);

    //Execute change fee proposal
    await TruffleAssert.reverts(
      bridgeSide.executeFeeProposalWithSig(governedToken, 101),
      'invalid fee percentage'
    );
  })

  it('execute add token proposal', async () => {
    const signers = await ethers.getSigners();
    const initialGovernor = signers[1];
    const admin = signers[1];
    const bridgeSide = await SignatureBridgeSide.createBridgeSide(initialGovernor.address, 0, 100, admin);

    //Deploy TokenWrapperHandler
    const tokenWrapperHandler = await TokenWrapperHandler.createTokenWrapperHandler(bridgeSide.contract.address, [], [], admin);
    //Create a GovernedTokenWrapper
    const governedToken = await GovernedTokenWrapper.createGovernedTokenWrapper(
      `webbETH-test-1`,
      `webbETH-test-1`,
      tokenWrapperHandler.contract.address,
      '10000000000000000000000000',
      false,
      admin,
    );

    //Set bridgeSide handler to tokenWrapperHandler
    bridgeSide.setTokenWrapperHandler(tokenWrapperHandler);

    //Connect resourceID of GovernedTokenWrapper with TokenWrapperHandler
    await bridgeSide.setGovernedTokenResourceWithSignature(governedToken);

    //Create an ERC20 Token
    const tokenInstance = await MintableToken.createToken('testToken', 'TEST', admin);
    await tokenInstance.mintTokens(admin.address, '100000000000000000000000');

    //Execute Proposal to add that token to the governedToken
    await bridgeSide.executeAddTokenProposalWithSig(governedToken, tokenInstance.contract.address);

    //Check that governedToken contains the added token
    assert((await governedToken.contract.getTokens()).includes(tokenInstance.contract.address));
  })

  it('execute remove token proposal', async () => {
    const signers = await ethers.getSigners();
    const initialGovernor = signers[1];
    const admin = signers[1];
    const bridgeSide = await SignatureBridgeSide.createBridgeSide(initialGovernor.address, 0, 100, admin);

    //Deploy TokenWrapperHandler
    const tokenWrapperHandler = await TokenWrapperHandler.createTokenWrapperHandler(bridgeSide.contract.address, [], [], admin);

    //Create a GovernedTokenWrapper
    const governedToken = await GovernedTokenWrapper.createGovernedTokenWrapper(
      `webbETH-test-1`,
      `webbETH-test-1`,
      tokenWrapperHandler.contract.address,
      '10000000000000000000000000',
      false,
      admin,
    );

    //Set bridgeSide handler to tokenWrapperHandler
    bridgeSide.setTokenWrapperHandler(tokenWrapperHandler);

    //Connect resourceID of GovernedTokenWrapper with TokenWrapperHandler
    await bridgeSide.setGovernedTokenResourceWithSignature(governedToken);


    // Add a Token---------

    //Create an ERC20 Token
    const tokenInstance = await MintableToken.createToken('testToken', 'TEST', admin);
    await tokenInstance.mintTokens(admin.address, '100000000000000000000000');

    //Execute Proposal to add that token to the governedToken
    await bridgeSide.executeAddTokenProposalWithSig(governedToken, tokenInstance.contract.address);

    //Check that governedToken contains the added token
    assert((await governedToken.contract.getTokens()).includes(tokenInstance.contract.address));
    //End Add a Token--------

    //Remove a Token
    await bridgeSide.executeRemoveTokenProposalWithSig(governedToken, tokenInstance.contract.address);

    assert((await governedToken.contract.getTokens()).length === 0);  
  })

  it('check nonce is increasing across multiple proposals', async () => {
    const signers = await ethers.getSigners();
    const initialGovernor = signers[1];
    const admin = signers[1];
    const bridgeSide = await SignatureBridgeSide.createBridgeSide(initialGovernor.address, 0, 100, admin);

    //Deploy TokenWrapperHandler
    const tokenWrapperHandler = await TokenWrapperHandler.createTokenWrapperHandler(bridgeSide.contract.address, [], [], admin);

    //Create a GovernedTokenWrapper
    const governedToken = await GovernedTokenWrapper.createGovernedTokenWrapper(
      `webbETH-test-1`,
      `webbETH-test-1`,
      tokenWrapperHandler.contract.address,
      '10000000000000000000000000',
      false,
      admin,
    );

    //Set bridgeSide handler to tokenWrapperHandler
    bridgeSide.setTokenWrapperHandler(tokenWrapperHandler);

    //Connect resourceID of GovernedTokenWrapper with TokenWrapperHandler
    await bridgeSide.setGovernedTokenResourceWithSignature(governedToken);

    //Execute change fee proposal
    await bridgeSide.executeFeeProposalWithSig(governedToken, 5);

    //Check that fee actually changed
    assert.strictEqual((await governedToken.contract.getFee()).toString(), '5');
    assert.strictEqual((await governedToken.contract.proposalNonce()).toString(), '1');

    //Create an ERC20 Token
    const tokenInstance = await MintableToken.createToken('testToken', 'TEST', admin);
    await tokenInstance.mintTokens(admin.address, '100000000000000000000000');

    //Execute Proposal to add that token to the governedToken
    await bridgeSide.executeAddTokenProposalWithSig(governedToken, tokenInstance.contract.address);

    //Check that governedToken contains the added token
    assert((await governedToken.contract.getTokens()).includes(tokenInstance.contract.address));
    //End Add a Token--------
    assert.strictEqual((await governedToken.contract.proposalNonce()).toString(), '2');

    //Remove a Token
    await bridgeSide.executeRemoveTokenProposalWithSig(governedToken, tokenInstance.contract.address);

    assert((await governedToken.contract.getTokens()).length === 0);  
    assert.strictEqual((await governedToken.contract.proposalNonce()).toString(), '3');
  })


  it('nonce should update upon handler proposal executing', async () => {
    const signers = await ethers.getSigners();
    const initialGovernor = signers[1];
    const admin = signers[1];
    const bridgeSide = await SignatureBridgeSide.createBridgeSide(initialGovernor.address, 0, 100, admin);

    // Create the Hasher and Verifier for the chain
    const hasherFactory = new PoseidonT3__factory(admin);
    let hasherInstance = await hasherFactory.deploy({ gasLimit: '0x5B8D80' });
    await hasherInstance.deployed();

    const verifier = await Verifier.createVerifier(admin);

    const tokenInstance = await MintableToken.createToken('testToken', 'TEST', admin);
    await tokenInstance.mintTokens(admin.address, '100000000000000000000000');

    const anchorHandler = await AnchorHandler.createAnchorHandler(bridgeSide.contract.address, [], [], admin);

    const anchor = await Anchor.createAnchor(
      verifier.contract.address,
      hasherInstance.address,
      '1000000000000',
      30,
      tokenInstance.contract.address,
      anchorHandler.contract.address,
      5,
      zkComponents,
      admin
    );

    await tokenInstance.approveSpending(anchor.contract.address);

    await bridgeSide.setAnchorHandler(anchorHandler);
    // //Function call below sets resource with signature
    await bridgeSide.connectAnchorWithSignature(anchor);
    //Check that proposal nonce is updated on anchor contract since handler proposal has been executed
    assert.strictEqual(await anchor.contract.getProposalNonce(), 1);

    await bridgeSide.connectAnchorWithSignature(anchor);
    assert.strictEqual(await anchor.contract.getProposalNonce(), 2);

    await bridgeSide.connectAnchorWithSignature(anchor);
    assert.strictEqual(await anchor.contract.getProposalNonce(), 3);

    await bridgeSide.connectAnchorWithSignature(anchor);
    assert.strictEqual(await anchor.contract.getProposalNonce(), 4);

    await bridgeSide.connectAnchorWithSignature(anchor);
    assert.strictEqual(await anchor.contract.getProposalNonce(), 5);
  })

 })

 describe('Rescue Tokens Tests for ERC20 Tokens', () => {
   let zkComponents: ZkComponents;
   let sourceAnchor: Anchor;
   let destAnchor: Anchor;
   let anchorHandler: AnchorHandler;
   let erc20TokenInstance: MintableToken;
   let bridgeSide: SignatureBridgeSide;
   let wrappingFee: number;
   let signers;
   let governedToken;
  
   before(async () => {
     zkComponents = await fetchComponentsFromFilePaths(
       path.resolve(__dirname, '../../protocol-solidity-fixtures/fixtures/bridge/2/poseidon_bridge_2.wasm'),
       path.resolve(__dirname, '../../protocol-solidity-fixtures/fixtures/bridge/2/witness_calculator.js'),
       path.resolve(__dirname, '../../protocol-solidity-fixtures/fixtures/bridge/2/circuit_final.zkey')
     );
   })
 
   beforeEach(async() => {
     signers = await ethers.getSigners();
     const initialGovernor = signers[1];
     const admin = signers[1];
     bridgeSide = await SignatureBridgeSide.createBridgeSide(initialGovernor.address, 0, 100, admin);
 
     // Deploy TokenWrapperHandler
     const tokenWrapperHandler = await TokenWrapperHandler.createTokenWrapperHandler(bridgeSide.contract.address, [], [], admin);
 
     // Create ERC20 Token
     erc20TokenInstance = await MintableToken.createToken('testToken', 'TEST', admin);
     await erc20TokenInstance.mintTokens(admin.address, '100000000000000000000000');
 
     // Create a GovernedTokenWrapper
     governedToken = await GovernedTokenWrapper.createGovernedTokenWrapper(
       `webbETH-test-1`,
       `webbETH-test-1`,
       tokenWrapperHandler.contract.address,
       '10000000000000000000000000',
       true,
       admin,
     );
 
     // Set bridgeSide handler to tokenWrapperHandler
     bridgeSide.setTokenWrapperHandler(tokenWrapperHandler);
 
     // Connect resourceID of GovernedTokenWrapper with TokenWrapperHandler
     await bridgeSide.setGovernedTokenResourceWithSignature(governedToken);
 
     wrappingFee = 10;
     // Execute change fee proposal
     await bridgeSide.executeFeeProposalWithSig(governedToken, wrappingFee);
 
     // Check that fee actually changed
     assert.strictEqual((await governedToken.contract.getFee()).toString(), '10');
     assert.strictEqual((await governedToken.contract.proposalNonce()).toString(), '1');
 
     // Execute Proposal to add that token to the governedToken
     await bridgeSide.executeAddTokenProposalWithSig(governedToken, erc20TokenInstance.contract.address);
 
     // Check that governedToken contains the added token
     assert((await governedToken.contract.getTokens()).includes(erc20TokenInstance.contract.address));
     
     assert.strictEqual((await governedToken.contract.proposalNonce()).toString(), '2');
 
     // Create an anchor whose token is the governedToken
     // Wrap and Deposit ERC20 liquidity into that anchor
 
     // Create the Hasher and Verifier for the chain
     const hasherFactory = new PoseidonT3__factory(admin);
     let hasherInstance = await hasherFactory.deploy({ gasLimit: '0x5B8D80' });
     await hasherInstance.deployed();
 
     const verifier = await Verifier.createVerifier(admin);
 
     anchorHandler = await AnchorHandler.createAnchorHandler(bridgeSide.contract.address, [], [], admin);
 
     let anchorDenomination = 1000000000000;
     sourceAnchor = await Anchor.createAnchor(
       verifier.contract.address,
       hasherInstance.address,
       anchorDenomination.toString(),
       30,
       governedToken.contract.address,
       anchorHandler.contract.address,
       5,
       zkComponents,
       admin
     );
 
     await governedToken.grantMinterRole(sourceAnchor.contract.address);
     await erc20TokenInstance.approveSpending(governedToken.contract.address);
     await erc20TokenInstance.approveSpending(sourceAnchor.contract.address);
     
     await TruffleAssert.reverts(
      sourceAnchor.wrapAndDeposit(erc20TokenInstance.contract.address, await admin.getChainId()),
      'Fee Recipient cannot be zero address'
     ); 

     // Change Fee Recipient to Bridge Address
     await bridgeSide.executeFeeRecipientProposalWithSig(governedToken, bridgeSide.contract.address);

     // For ERC20 Tests
     await sourceAnchor.wrapAndDeposit(erc20TokenInstance.contract.address, await admin.getChainId());

     // Anchor Denomination amount should go to TokenWrapper
     assert.strictEqual((await erc20TokenInstance.getBalance(governedToken.contract.address)).toString(), anchorDenomination.toString());

     // The wrapping fee should be transferred to the bridgeSide
     assert.strictEqual((await erc20TokenInstance.getBalance(bridgeSide.contract.address)).toString(), parseInt((anchorDenomination * (wrappingFee / (100 - wrappingFee))).toString()).toString());

     assert.strictEqual((await governedToken.contract.balanceOf(sourceAnchor.contract.address)).toString(), anchorDenomination.toString());
   })
 
   it('should rescue tokens', async () => {
    let balBridgeSideBeforeRescue = await erc20TokenInstance.getBalance(bridgeSide.contract.address);
    let to = signers[2].address;
    let balToBeforeRescue = await erc20TokenInstance.getBalance(to);

    await bridgeSide.rescueTokensWithSig(erc20TokenInstance.contract.address, to, BigNumber.from('500'));

    let balBridgeSideAfterRescue = await erc20TokenInstance.getBalance(bridgeSide.contract.address);
    let balToAfterRescue = await erc20TokenInstance.getBalance(to);

    assert.strictEqual(balBridgeSideBeforeRescue.sub(balBridgeSideAfterRescue).toString(),'500');

    assert.strictEqual(balToAfterRescue.sub(balToBeforeRescue).toString(),'500');
   })
   
   it('should rescue all tokens when amount to rescue is larger than treasury balance', async () => {
    let balBridgeSideBeforeRescue = await erc20TokenInstance.getBalance(bridgeSide.contract.address);
    let to = signers[2].address;
    let balToBeforeRescue = await erc20TokenInstance.getBalance(to);

    await bridgeSide.rescueTokensWithSig(erc20TokenInstance.contract.address, to, BigNumber.from('500000000000000000000000'));

    let balBridgeSideAfterRescue = await erc20TokenInstance.getBalance(bridgeSide.contract.address);
    let balToAfterRescue = await erc20TokenInstance.getBalance(to);

    // balBridgeSideAfterRescue = 0
    assert.strictEqual(balBridgeSideBeforeRescue.sub(balBridgeSideAfterRescue).toString(), balBridgeSideBeforeRescue.toString());

    // Should be balBridgeSideBeforeRescue, since all tokens are transferred to the to address
    assert.strictEqual(balToAfterRescue.sub(balToBeforeRescue).toString(),balBridgeSideBeforeRescue.toString());
   })
 })

 describe('Rescue Tokens Tests for Native ETH', () => {
  let zkComponents: ZkComponents;
  let sourceAnchor: Anchor;
  let destAnchor: Anchor;
  let anchorHandler: AnchorHandler;
  let erc20TokenInstance: MintableToken;
  let bridgeSide: SignatureBridgeSide;
  let wrappingFee: number;
  let signers;
  let governedToken;
  const zeroAddress = "0x0000000000000000000000000000000000000000";
 
  before(async () => {
    zkComponents = await fetchComponentsFromFilePaths(
      path.resolve(__dirname, '../../protocol-solidity-fixtures/fixtures/bridge/2/poseidon_bridge_2.wasm'),
      path.resolve(__dirname, '../../protocol-solidity-fixtures/fixtures/bridge/2/witness_calculator.js'),
      path.resolve(__dirname, '../../protocol-solidity-fixtures/fixtures/bridge/2/circuit_final.zkey')
    );
  })

  beforeEach(async() => {
    signers = await ethers.getSigners();
    const initialGovernor = signers[1];
    const admin = signers[1];
    bridgeSide = await SignatureBridgeSide.createBridgeSide(initialGovernor.address, 0, 100, admin);

    // Deploy TokenWrapperHandler
    const tokenWrapperHandler = await TokenWrapperHandler.createTokenWrapperHandler(bridgeSide.contract.address, [], [], admin);

    // Create ERC20 Token
    erc20TokenInstance = await MintableToken.createToken('testToken', 'TEST', admin);
    await erc20TokenInstance.mintTokens(admin.address, '100000000000000000000000');

    // Create a GovernedTokenWrapper
    governedToken = await GovernedTokenWrapper.createGovernedTokenWrapper(
      `webbETH-test-1`,
      `webbETH-test-1`,
      tokenWrapperHandler.contract.address,
      '10000000000000000000000000',
      true,
      admin,
    );

    // Set bridgeSide handler to tokenWrapperHandler
    bridgeSide.setTokenWrapperHandler(tokenWrapperHandler);

    // Connect resourceID of GovernedTokenWrapper with TokenWrapperHandler
    await bridgeSide.setGovernedTokenResourceWithSignature(governedToken);

    wrappingFee = 10;
    // Execute change fee proposal
    await bridgeSide.executeFeeProposalWithSig(governedToken, wrappingFee);

    // Check that fee actually changed
    assert.strictEqual((await governedToken.contract.getFee()).toString(), '10');

    // Create an anchor whose token is the governedToken
    // Wrap and Deposit ERC20 liquidity into that anchor

    // Create the Hasher and Verifier for the chain
    const hasherFactory = new PoseidonT3__factory(admin);
    let hasherInstance = await hasherFactory.deploy({ gasLimit: '0x5B8D80' });
    await hasherInstance.deployed();

    const verifier = await Verifier.createVerifier(admin);

    anchorHandler = await AnchorHandler.createAnchorHandler(bridgeSide.contract.address, [], [], admin);

    let anchorDenomination = 1000000000000;
    sourceAnchor = await Anchor.createAnchor(
      verifier.contract.address,
      hasherInstance.address,
      anchorDenomination.toString(),
      30,
      governedToken.contract.address,
      anchorHandler.contract.address,
      5,
      zkComponents,
      admin
    );

    await governedToken.grantMinterRole(sourceAnchor.contract.address);

    await TruffleAssert.reverts(
     sourceAnchor.wrapAndDeposit(zeroAddress, await admin.getChainId(), wrappingFee),
     'Fee Recipient cannot be zero address'
    ); 

    // Change Fee Recipient to Bridge Address
    await bridgeSide.executeFeeRecipientProposalWithSig(governedToken, bridgeSide.contract.address);

    // For Native ETH Tests
    await sourceAnchor.wrapAndDeposit(zeroAddress, await admin.getChainId(), wrappingFee);

    console.log();

    // Anchor Denomination amount should go to TokenWrapper
    assert.strictEqual((await ethers.provider.getBalance(governedToken.contract.address)).toString(), anchorDenomination.toString());

    // The wrapping fee should be transferred to the bridgeSide
    assert.strictEqual((await ethers.provider.getBalance(bridgeSide.contract.address)).toString(), parseInt((anchorDenomination * (wrappingFee / (100 - wrappingFee))).toString()).toString());

    assert.strictEqual((await governedToken.contract.balanceOf(sourceAnchor.contract.address)).toString(), anchorDenomination.toString());
  })

  it.only('should rescue native eth', async () => {
    let balBridgeSideBeforeRescue = await ethers.provider.getBalance(bridgeSide.contract.address);
    let to = signers[2].address;
    let balToBeforeRescue = await ethers.provider.getBalance(to);

    await bridgeSide.rescueTokensWithSig(zeroAddress, to, BigNumber.from('500'));

    let balBridgeSideAfterRescue = await ethers.provider.getBalance(bridgeSide.contract.address);
    let balToAfterRescue = await ethers.provider.getBalance(to);

    assert.strictEqual(balBridgeSideBeforeRescue.sub(balBridgeSideAfterRescue).toString(),'500');

    assert.strictEqual(balToAfterRescue.sub(balToBeforeRescue).toString(),'500');
  })

  it.only('should rescue all native eth when amountToRescue greater than treasury balance', async () => {
    let balBridgeSideBeforeRescue = await ethers.provider.getBalance(bridgeSide.contract.address);
    let to = signers[2].address;
    let balToBeforeRescue = await ethers.provider.getBalance(to);

    await bridgeSide.rescueTokensWithSig(zeroAddress, to, BigNumber.from('500000000000000'));

    let balBridgeSideAfterRescue = await ethers.provider.getBalance(bridgeSide.contract.address);
    let balToAfterRescue = await ethers.provider.getBalance(to);

    // balBridgeSideAfterRescue = 0
    assert.strictEqual(balBridgeSideBeforeRescue.sub(balBridgeSideAfterRescue).toString(), balBridgeSideBeforeRescue.toString());

    // Should be balBridgeSideBeforeRescue, since all tokens are transferred to the to address
    assert.strictEqual(balToAfterRescue.sub(balToBeforeRescue).toString(),balBridgeSideBeforeRescue.toString());
  })
})