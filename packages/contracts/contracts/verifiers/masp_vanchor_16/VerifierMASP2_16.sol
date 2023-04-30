//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// 2019 OKIMS
//      ported to solidity 0.6
//      fixed linter warnings
//      added requiere error messages
//
//
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.5;
library Pairing {
    struct G1Point {
        uint X;
        uint Y;
    }
    // Encoding of field elements is: X[0] * z + X[1]
    struct G2Point {
        uint[2] X;
        uint[2] Y;
    }
    /// @return the generator of G1
    function P1() internal pure returns (G1Point memory) {
        return G1Point(1, 2);
    }
    /// @return the generator of G2
    function P2() internal pure returns (G2Point memory) {
        // Original code point
        return G2Point(
            [11559732032986387107991004021392285783925812861821192530917403151452391805634,
             10857046999023057135944570762232829481370756359578518086990519993285655852781],
            [4082367875863433681332203403145435568316851327593401208105741076214120093531,
             8495653923123431417604973247489272438418190587263600148770280649306958101930]
        );

/*
        // Changed by Jordi point
        return G2Point(
            [10857046999023057135944570762232829481370756359578518086990519993285655852781,
             11559732032986387107991004021392285783925812861821192530917403151452391805634],
            [8495653923123431417604973247489272438418190587263600148770280649306958101930,
             4082367875863433681332203403145435568316851327593401208105741076214120093531]
        );
*/
    }
    /// @return r the negation of p, i.e. p.addition(p.negate()) should be zero.
    function negate(G1Point memory p) internal pure returns (G1Point memory r) {
        // The prime q in the base field F_q for G1
        uint q = 21888242871839275222246405745257275088696311157297823662689037894645226208583;
        if (p.X == 0 && p.Y == 0)
            return G1Point(0, 0);
        return G1Point(p.X, q - (p.Y % q));
    }
    /// @return r the sum of two points of G1
    function addition(G1Point memory p1, G1Point memory p2) internal view returns (G1Point memory r) {
        uint[4] memory input;
        input[0] = p1.X;
        input[1] = p1.Y;
        input[2] = p2.X;
        input[3] = p2.Y;
        bool success;
        // solium-disable-next-line security/no-inline-assembly
        assembly {
            success := staticcall(sub(gas(), 2000), 6, input, 0xc0, r, 0x60)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }
        require(success,"pairing-add-failed");
    }
    /// @return r the product of a point on G1 and a scalar, i.e.
    /// p == p.scalar_mul(1) and p.addition(p) == p.scalar_mul(2) for all points p.
    function scalar_mul(G1Point memory p, uint s) internal view returns (G1Point memory r) {
        uint[3] memory input;
        input[0] = p.X;
        input[1] = p.Y;
        input[2] = s;
        bool success;
        // solium-disable-next-line security/no-inline-assembly
        assembly {
            success := staticcall(sub(gas(), 2000), 7, input, 0x80, r, 0x60)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }
        require (success,"pairing-mul-failed");
    }
    /// @return the result of computing the pairing check
    /// e(p1[0], p2[0]) *  .... * e(p1[n], p2[n]) == 1
    /// For example pairing([P1(), P1().negate()], [P2(), P2()]) should
    /// return true.
    function pairing(G1Point[] memory p1, G2Point[] memory p2) internal view returns (bool) {
        require(p1.length == p2.length,"pairing-lengths-failed");
        uint elements = p1.length;
        uint inputSize = elements * 6;
        uint[] memory input = new uint[](inputSize);
        for (uint i = 0; i < elements; i++)
        {
            input[i * 6 + 0] = p1[i].X;
            input[i * 6 + 1] = p1[i].Y;
            input[i * 6 + 2] = p2[i].X[0];
            input[i * 6 + 3] = p2[i].X[1];
            input[i * 6 + 4] = p2[i].Y[0];
            input[i * 6 + 5] = p2[i].Y[1];
        }
        uint[1] memory out;
        bool success;
        // solium-disable-next-line security/no-inline-assembly
        assembly {
            success := staticcall(sub(gas(), 2000), 8, add(input, 0x20), mul(inputSize, 0x20), out, 0x20)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }
        require(success,"pairing-opcode-failed");
        return out[0] != 0;
    }
    /// Convenience method for a pairing check for two pairs.
    function pairingProd2(G1Point memory a1, G2Point memory a2, G1Point memory b1, G2Point memory b2) internal view returns (bool) {
        G1Point[] memory p1 = new G1Point[](2);
        G2Point[] memory p2 = new G2Point[](2);
        p1[0] = a1;
        p1[1] = b1;
        p2[0] = a2;
        p2[1] = b2;
        return pairing(p1, p2);
    }
    /// Convenience method for a pairing check for three pairs.
    function pairingProd3(
            G1Point memory a1, G2Point memory a2,
            G1Point memory b1, G2Point memory b2,
            G1Point memory c1, G2Point memory c2
    ) internal view returns (bool) {
        G1Point[] memory p1 = new G1Point[](3);
        G2Point[] memory p2 = new G2Point[](3);
        p1[0] = a1;
        p1[1] = b1;
        p1[2] = c1;
        p2[0] = a2;
        p2[1] = b2;
        p2[2] = c2;
        return pairing(p1, p2);
    }
    /// Convenience method for a pairing check for four pairs.
    function pairingProd4(
            G1Point memory a1, G2Point memory a2,
            G1Point memory b1, G2Point memory b2,
            G1Point memory c1, G2Point memory c2,
            G1Point memory d1, G2Point memory d2
    ) internal view returns (bool) {
        G1Point[] memory p1 = new G1Point[](4);
        G2Point[] memory p2 = new G2Point[](4);
        p1[0] = a1;
        p1[1] = b1;
        p1[2] = c1;
        p1[3] = d1;
        p2[0] = a2;
        p2[1] = b2;
        p2[2] = c2;
        p2[3] = d2;
        return pairing(p1, p2);
    }
}
contract VerifierMASP2_16 {
    using Pairing for *;
    struct VerifyingKey {
        Pairing.G1Point alfa1;
        Pairing.G2Point beta2;
        Pairing.G2Point gamma2;
        Pairing.G2Point delta2;
        Pairing.G1Point[] IC;
    }
    struct Proof {
        Pairing.G1Point A;
        Pairing.G2Point B;
        Pairing.G1Point C;
    }
    function verifyingKey() internal pure returns (VerifyingKey memory vk) {
        vk.alfa1 = Pairing.G1Point(
            20491192805390485299153009773594534940189261866228447918068658471970481763042,
            9383485363053290200918347156157836566562967994039712273449902621266178545958
        );

        vk.beta2 = Pairing.G2Point(
            [4252822878758300859123897981450591353533073413197771768651442665752259397132,
             6375614351688725206403948262868962793625744043794305715222011528459656738731],
            [21847035105528745403288232691147584728191162732299865338377159692350059136679,
             10505242626370262277552901082094356697409835680220590971873171140371331206856]
        );
        vk.gamma2 = Pairing.G2Point(
            [11559732032986387107991004021392285783925812861821192530917403151452391805634,
             10857046999023057135944570762232829481370756359578518086990519993285655852781],
            [4082367875863433681332203403145435568316851327593401208105741076214120093531,
             8495653923123431417604973247489272438418190587263600148770280649306958101930]
        );
        vk.delta2 = Pairing.G2Point(
            [5331440584178188452227121861140631211700042904829401828996472509570584637076,
             8780122209524233407698215327513319000791572582730455727051136898386477495766],
            [18318908630632848940877968638929288119386218876165785163571499468188263182575,
             1912823391769382405726173490603796133837430906731497392573918877673463260253]
        );
        vk.IC = new Pairing.G1Point[](40);
        
        vk.IC[0] = Pairing.G1Point( 
            5900487767641676583854915013226837870849799323724677839954894670236362593268,
            7889328693630826640149797623488594799696587296194004609646354472118578678951
        );                                      
        
        vk.IC[1] = Pairing.G1Point( 
            12694910930551576529256735632908052514923404868845538426758929181031894976814,
            18757169302707423385547458672084954162207544405287404879009731859695600816112
        );                                      
        
        vk.IC[2] = Pairing.G1Point( 
            13514531219126956604212231362403175773052351256356175179251332021079187490106,
            379751917562533323350384395383597929316377606885508208374022889947299890297
        );                                      
        
        vk.IC[3] = Pairing.G1Point( 
            5957885005662808913097661585594282378170521836446764085678523181378754317087,
            21675982217818839387983123279783436165097544060331465022944983327754499844974
        );                                      
        
        vk.IC[4] = Pairing.G1Point( 
            2606541149567566289161075004385373957595516329932535153848938747946558565772,
            18882229931617759715504588095735051338422904098017311086222249717622348056243
        );                                      
        
        vk.IC[5] = Pairing.G1Point( 
            14151189842496446467024133500005014404639528087551701516785525511191042664204,
            5117791403055031433265792930712035031558369609910934315703687978235762372480
        );                                      
        
        vk.IC[6] = Pairing.G1Point( 
            4628170506715787253005638667379023184208981165056266928721011488533849381484,
            11071099596688378945468799049200119255591510303144793287235917199468354165164
        );                                      
        
        vk.IC[7] = Pairing.G1Point( 
            6987793302907831487641695172889404541017946865115288450946644910118233182649,
            547803080451741089523162579018223332607430444244743294698980316516044120094
        );                                      
        
        vk.IC[8] = Pairing.G1Point( 
            1987254311634520127853805383257689177392860976271680842000061651052376167991,
            8215442249271180646868612882690367807143073686102054117782652615410240890588
        );                                      
        
        vk.IC[9] = Pairing.G1Point( 
            10417229365036666911885132618606292176603789987911709882975503227548900550098,
            5729654379204303718992740313202302547095690766273561147276374359290681607236
        );                                      
        
        vk.IC[10] = Pairing.G1Point( 
            5329816052740434352081270849922663497469790452357914379953895530072043281584,
            20197820840081779575548972098276468629220802708536930396140410560955399807578
        );                                      
        
        vk.IC[11] = Pairing.G1Point( 
            3933498162196715645816691720075743129226997660582026980726493924456343854076,
            20481977447808980096015291379477005309812439599503843651158596533874673982767
        );                                      
        
        vk.IC[12] = Pairing.G1Point( 
            4988127946597520246610127726011548412852883189897364830262745354758502011458,
            11877006081347837520283427688713114035225500682616124131902752037302142892960
        );                                      
        
        vk.IC[13] = Pairing.G1Point( 
            20546195184749637979766164029415031041200514211655916844876286259081569428022,
            3598649467658343671367357372282601644912562419100196126498267415347378719382
        );                                      
        
        vk.IC[14] = Pairing.G1Point( 
            16590138377763854731210762520567041316619200106820390388945257261012495318387,
            14599940804946879801111699293766331722255613510109861126354620070654640391382
        );                                      
        
        vk.IC[15] = Pairing.G1Point( 
            10974238154329912727879005969801050040756551065411282752609110524825995937956,
            6880031948446327920919905600774281516898598352452549290612741497244263612988
        );                                      
        
        vk.IC[16] = Pairing.G1Point( 
            19071201873422411972429354682006917362351921313156135425480434186768906959324,
            18684765246000369190102076411931557806129039867134659624120074268000910291721
        );                                      
        
        vk.IC[17] = Pairing.G1Point( 
            15554784587160474720617055602042682369608119942275129881111918596261938062465,
            21066620571421443931511607238947254001526712170317796081274124111573881688976
        );                                      
        
        vk.IC[18] = Pairing.G1Point( 
            5067452102760006128171323601789850383707617327256135012726042446668502972287,
            1819611540538307983383667285096305679133544809805442444616002517079227669882
        );                                      
        
        vk.IC[19] = Pairing.G1Point( 
            2680671523118822603299106772679559053269637339702802302653346625980588578017,
            1948560578736284828041143851104194594193794102027826360537822724691637626558
        );                                      
        
        vk.IC[20] = Pairing.G1Point( 
            21182567237649718586681699361350855643589686820515794898626107988884636301986,
            16389677742710509338585430435141730863854469070199421800102114955573484745228
        );                                      
        
        vk.IC[21] = Pairing.G1Point( 
            21416480986987540310256401572151917216965451780896624138478717933667884083911,
            7433053680666531591757705222457721615799076320538761732825127089073544857406
        );                                      
        
        vk.IC[22] = Pairing.G1Point( 
            11997249050877200194026448287125223495174109339892045320153450901179060259097,
            7901829503405597397960615850402835953081620346720060147934619129058697291921
        );                                      
        
        vk.IC[23] = Pairing.G1Point( 
            1992929010928740763965165226149502388176952630184315602034984467164483103932,
            15747394873791676593771290119669734583129884337870658276372679795480733001297
        );                                      
        
        vk.IC[24] = Pairing.G1Point( 
            11670319235398518912283469330137120917723629252075804092907541901865904202921,
            6597498192870594759507218089943703702776932688845534919929883765773036237198
        );                                      
        
        vk.IC[25] = Pairing.G1Point( 
            20578455013190392813745970770830719610678165242963520350944381630392229951136,
            21760017746398131318256193068601011316825952344666655055442564801893273481671
        );                                      
        
        vk.IC[26] = Pairing.G1Point( 
            16752501653281251864394210651271748890506356345513760481997506402258807186398,
            6566302569329289923074150406612107823579598870571640519097540981976274756316
        );                                      
        
        vk.IC[27] = Pairing.G1Point( 
            19193557306434166462030651682632932944183378922997332685937045518204502953617,
            18373153159724457790073383966350155670701433154632687431940136520379325462276
        );                                      
        
        vk.IC[28] = Pairing.G1Point( 
            2558410263777137715286651255760555166146765653740098716562518387167210313210,
            17610162019730056712313577408657813991551168692244044651991602866584061182936
        );                                      
        
        vk.IC[29] = Pairing.G1Point( 
            1659884360331791943281519616342959606338476274673772675155603397080213511540,
            1803034867823869393323144340067509582766835295742686381328019461473771175606
        );                                      
        
        vk.IC[30] = Pairing.G1Point( 
            12450017688726742514754245479733396652088947373553532935986679605327940309096,
            2024126742675551322932047782886075294836965205029027964430843790262015953858
        );                                      
        
        vk.IC[31] = Pairing.G1Point( 
            7549294537893796625302560605685298464659061685630957079294722452614295871271,
            4298205181683980608434172378026393907869155636988325966911260523156335642210
        );                                      
        
        vk.IC[32] = Pairing.G1Point( 
            21590290010888252031432877279080507649185456885977952303395839012819319211328,
            8744878621889163254880913140738295207543081911188442238005439059978510591186
        );                                      
        
        vk.IC[33] = Pairing.G1Point( 
            14145604152463776152404866038648646052165827268414134357502632450269897969657,
            8353581195303437660009319958539343798455788824628869298424248894054661311150
        );                                      
        
        vk.IC[34] = Pairing.G1Point( 
            41615195890283802191064486838095811918578649647017284271107235578233061268,
            2576866995802147254231895525299935413612006527006134759494992694720122991535
        );                                      
        
        vk.IC[35] = Pairing.G1Point( 
            8479755281883191863602066809177022535713367600816647410139975476817721920257,
            15269438005519729108142018220988687095964709720542556990788540053946616475965
        );                                      
        
        vk.IC[36] = Pairing.G1Point( 
            9730170942973914874306728164901064477596591777323185005652052254297996338074,
            8947735804730109730801844291805060475394357724477695323394806351044536897106
        );                                      
        
        vk.IC[37] = Pairing.G1Point( 
            15863735507735024317114774246891425610656074039287858847956900955297851808440,
            6496015418059645497536838901114015238158667563133615772443942216365607459377
        );                                      
        
        vk.IC[38] = Pairing.G1Point( 
            17283443030357866502307053394337770241495780410039090958041691746181659224323,
            225580214652585735225969363350475377833400651069447221641023096718954352778
        );                                      
        
        vk.IC[39] = Pairing.G1Point( 
            19485829106257703147056989147923187036328643817472300536993440156714106468645,
            9890700225000142611523250198612709849716573486658291536613766379711317883548
        );                                      
        
    }
    function verify(uint[] memory input, Proof memory proof) internal view returns (uint) {
        uint256 snark_scalar_field = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
        VerifyingKey memory vk = verifyingKey();
        require(input.length + 1 == vk.IC.length,"verifier-bad-input");
        // Compute the linear combination vk_x
        Pairing.G1Point memory vk_x = Pairing.G1Point(0, 0);
        for (uint i = 0; i < input.length; i++) {
            require(input[i] < snark_scalar_field,"verifier-gte-snark-scalar-field");
            vk_x = Pairing.addition(vk_x, Pairing.scalar_mul(vk.IC[i + 1], input[i]));
        }
        vk_x = Pairing.addition(vk_x, vk.IC[0]);
        if (!Pairing.pairingProd4(
            Pairing.negate(proof.A), proof.B,
            vk.alfa1, vk.beta2,
            vk_x, vk.gamma2,
            proof.C, vk.delta2
        )) return 1;
        return 0;
    }
    /// @return r  bool true if proof is valid
    function verifyProof(
            uint[2] memory a,
            uint[2][2] memory b,
            uint[2] memory c,
            uint[39] memory input
        ) public view returns (bool r) {
        Proof memory proof;
        proof.A = Pairing.G1Point(a[0], a[1]);
        proof.B = Pairing.G2Point([b[0][0], b[0][1]], [b[1][0], b[1][1]]);
        proof.C = Pairing.G1Point(c[0], c[1]);
        uint[] memory inputValues = new uint[](input.length);
        for(uint i = 0; i < input.length; i++){
            inputValues[i] = input[i];
        }
        if (verify(inputValues, proof) == 0) {
            return true;
        } else {
            return false;
        }
    }
}
