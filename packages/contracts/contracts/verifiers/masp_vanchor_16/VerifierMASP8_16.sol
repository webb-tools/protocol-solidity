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
contract VerifierMASP8_16 {
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
            [12225720916169424975095422467868945489341737577520539126572748638544270951499,
             18056750160759107728271027186707787482365743163796081091208293912518714770195],
            [8693728419609593745911599701046957842102344086828628668261489530295760486062,
             5217751279793475893702765736208907041481785209939151656132163287692812443681]
        );
        vk.IC = new Pairing.G1Point[](46);
        
        vk.IC[0] = Pairing.G1Point( 
            1114453986854558865809147798980220960824218404432201995817648157330164597988,
            18127528919203335727170871389399019749443384154520593865910554816572009672190
        );                                      
        
        vk.IC[1] = Pairing.G1Point( 
            20489797050993261279685263673124738416687232147592858180502404773705907152073,
            14768361019247358902219350000356078746488044120884533789016471466965242558602
        );                                      
        
        vk.IC[2] = Pairing.G1Point( 
            6468017767947901366292033558198518719057487066433551391223166117580925259629,
            79932413862107290866891653859369635781276636189250306175298007638528253186
        );                                      
        
        vk.IC[3] = Pairing.G1Point( 
            2269700435737513976481433273023951270794650545680260152121861095081761904354,
            20690970585733871795966961254598209692985607940279801856028560485309450357598
        );                                      
        
        vk.IC[4] = Pairing.G1Point( 
            2896654990882477883220421014129729844045637061530715863524668851111637160144,
            21231048635058375852387333068607754871238657121413049886559341855247824392886
        );                                      
        
        vk.IC[5] = Pairing.G1Point( 
            8225969571390634127425950019909596523821610613690337510497876524840501864432,
            3205825987584896884583776772838114182431681113324956964450628940587530147562
        );                                      
        
        vk.IC[6] = Pairing.G1Point( 
            19545824242277076686675623200683117527427580931938861265253422937305983202655,
            4987403488468069141232671264541665112663308481282072234569354902105061835916
        );                                      
        
        vk.IC[7] = Pairing.G1Point( 
            6450556695591043667083890561410896063488093579582754742420950426842245445089,
            16773667400107883745222121509271669760685882465867093147608329988722640467876
        );                                      
        
        vk.IC[8] = Pairing.G1Point( 
            19528385181949952775041635650239595959591106440254494002394644550061630920957,
            2296989002574608813037847652680193605900726378230003953743593820968720744754
        );                                      
        
        vk.IC[9] = Pairing.G1Point( 
            4634166678594877157726576863510325490103670157090989921586240200709698045645,
            16909269266130811023946118652457356881288570152899166117775140058445211206308
        );                                      
        
        vk.IC[10] = Pairing.G1Point( 
            7958049134727933903074056856930768340598343286233325510912974295395391688654,
            11976405778716266328091175945218198988859569958524025637996474553571799543349
        );                                      
        
        vk.IC[11] = Pairing.G1Point( 
            18378646340390352439547352160335169345718976741569966680137934949947287331005,
            128928460895869778722776991870093234737874308549650738040071170756994816140
        );                                      
        
        vk.IC[12] = Pairing.G1Point( 
            1495419693022577909376450348642236651524590854653038440612080990023768241655,
            19676631639683551676081951287531861970807143930540402540591637434864330234750
        );                                      
        
        vk.IC[13] = Pairing.G1Point( 
            20659410315710642882344888019637560290859859763336923064483345777490662022369,
            7796096292465508928845827253824623531894347851482015454745041955474159908890
        );                                      
        
        vk.IC[14] = Pairing.G1Point( 
            18980071110728708999911146672569325317387280426040564671213301805435668351551,
            3451006929046971906658647452185610671186105311179498897907304159333510324706
        );                                      
        
        vk.IC[15] = Pairing.G1Point( 
            19599823419993558923564298370855234437427953986027994887957055510864711982884,
            19731115705348427063366890920254814697401308927009603112941798185467744817052
        );                                      
        
        vk.IC[16] = Pairing.G1Point( 
            7091181270288860967604082762288518747512207403722014567692010493326159588499,
            21529747593162401735740419486048552286864184496027259723975605611961059405059
        );                                      
        
        vk.IC[17] = Pairing.G1Point( 
            12056237325681150686845262118493046160798775076331511136372856768907740918493,
            6071461214838428947752799999680464635697073110074018425292515952918719463472
        );                                      
        
        vk.IC[18] = Pairing.G1Point( 
            18388299755645391645640481976779552100862325535042931448427525971991261124263,
            2660722958020425938858766244106331561469427191626911676962201018073733968539
        );                                      
        
        vk.IC[19] = Pairing.G1Point( 
            16974027924480954034883099087584434926249824982761893968405491091070559580898,
            4430520785824820898790193542994971497102987978601967163997691929143519787959
        );                                      
        
        vk.IC[20] = Pairing.G1Point( 
            14123651621723452674623013004635870468789475733894859072221576982857480955188,
            15689871709944625897258742761690010998073931252939052261091366246196600962761
        );                                      
        
        vk.IC[21] = Pairing.G1Point( 
            17636205176715745474187864722721942055944993353066511077083990816878150583761,
            3137327077085967534293944367330111320724972147675451736273482368171450117180
        );                                      
        
        vk.IC[22] = Pairing.G1Point( 
            8618063356007766947552188704174191937172785268106815686984181667832662172604,
            9696129983737480380712597180614147430251090382537784780587531275472639201327
        );                                      
        
        vk.IC[23] = Pairing.G1Point( 
            14696057028220034262559575332715372279692196908726441420354248174417234915871,
            20703610097161216505415030644999282955522469350801005573618318088653316705018
        );                                      
        
        vk.IC[24] = Pairing.G1Point( 
            7101930794867704927623857609313650900594138184674384861080382435176171509747,
            9190280183195274766791189254427396120978799689463848534982994003335456688987
        );                                      
        
        vk.IC[25] = Pairing.G1Point( 
            4788041815690426499931269287304919609870928135361153898407616396871091785826,
            10941284038866158994408381409017212941056074201000427409499433686982305883719
        );                                      
        
        vk.IC[26] = Pairing.G1Point( 
            10000157524064454077165844111806481889848699895295453324578280185254585611245,
            8113616161289386411842370035027886347949807708957018674532008658771191631791
        );                                      
        
        vk.IC[27] = Pairing.G1Point( 
            8517002688023682842257451761177265993107238423590882875249287720960969612965,
            16160650932614473288800779909208749551087843833284965741464178762953570962279
        );                                      
        
        vk.IC[28] = Pairing.G1Point( 
            69449722734724814903646717890921693272767994052683600008899762078065845741,
            15656168460307294123490386549853571374432847389028092380391844922737075001197
        );                                      
        
        vk.IC[29] = Pairing.G1Point( 
            15899303037137908429485093703889525350282865553182139059679563904230865682569,
            7118895326630525011403847828542796873144871136039951507041092020329807083060
        );                                      
        
        vk.IC[30] = Pairing.G1Point( 
            7778337836478166705939515030496748723330073791300432912853815628403596411288,
            2564837587887687514435974499233589061612116202640068739609907533245517807855
        );                                      
        
        vk.IC[31] = Pairing.G1Point( 
            18344268526204966447490107331641034278837182607524782062021676108983718320791,
            5543102777652618628391262618542046433291247085208517091747237815713591441150
        );                                      
        
        vk.IC[32] = Pairing.G1Point( 
            19283443152375253075992185210189194179348820803474275518751303411275050686473,
            9723262008267666948419021744588749705479272415193665823239780037401182156636
        );                                      
        
        vk.IC[33] = Pairing.G1Point( 
            20979408164216156379035453885243052420496003648079630661327799478821636082366,
            14376703134513931080914376893708593974064882108587491169702387295048200580894
        );                                      
        
        vk.IC[34] = Pairing.G1Point( 
            15260536156514611729809818933753609334521030108368259023053702576721800924140,
            4567216649356508749133448186523383050750110255686837912762057689281880533712
        );                                      
        
        vk.IC[35] = Pairing.G1Point( 
            21397158579766418847561279778645272507107599479027994504838911803915728192099,
            6457639737856610892011376492459151940160902690990767332289378190556659190503
        );                                      
        
        vk.IC[36] = Pairing.G1Point( 
            18375500204202181942317833421566488867434879121314606725791299198037606853200,
            11534852150078947306422299173752467449998390084076290159306698977066386411909
        );                                      
        
        vk.IC[37] = Pairing.G1Point( 
            9833670688267000472423672145812276609921116273076732531707249582293618406642,
            20844323842380502506087553464400076677540691360620971580299804251673856667787
        );                                      
        
        vk.IC[38] = Pairing.G1Point( 
            19691354738597159261143167819973096607949768983374592878715483312573175998706,
            19872457112658126334681553547428744244642167327633775168855695560965886850476
        );                                      
        
        vk.IC[39] = Pairing.G1Point( 
            6815434723585797945340273148055298968061421223860138000928237809044865557546,
            17443278225030354103232372845208636064987640449755143106166902769053787992852
        );                                      
        
        vk.IC[40] = Pairing.G1Point( 
            15115356870926515041932860654335041945103831941391079250003101041691702281947,
            2041783764723583014436514429052378810684994956591660076064711729142787200639
        );                                      
        
        vk.IC[41] = Pairing.G1Point( 
            10530756843674900762641764017202709293993156619269528406712235482349842491476,
            6250110777920308314539011055023785728105453413104478863566163629420809384953
        );                                      
        
        vk.IC[42] = Pairing.G1Point( 
            192589015597948014684588662220940668820238095425074723255385521099812173838,
            6469818419394136244403744001500831378220951139933749120541990121362849246196
        );                                      
        
        vk.IC[43] = Pairing.G1Point( 
            13353106934493793044457492231349932329112663088616809449618574626006395216272,
            16803713051436723806579497791978697506119262538052812352793432009609877199473
        );                                      
        
        vk.IC[44] = Pairing.G1Point( 
            8944708072744451654830814683148540608036646364243167595591361861095203922416,
            443379546910578829267894602564855904469488427992176903764708542775287849597
        );                                      
        
        vk.IC[45] = Pairing.G1Point( 
            13768087380009887156133058369451356476720554994404009999377206746962424367217,
            5032912307355762689305720969675139359722664094912989866112943033709886091855
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
            uint[45] memory input
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
