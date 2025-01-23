import { global } from "./global.js";
import { gameSettings as gs} from './settings.js';

export const gameSettings = {
    enemy1: {
        name: "Master Özen",  
        health: 100,                 
        timings:[10.2,0.43575453758239746, 0.5164661407470703, 0.5080089569091797, 0.5234203338623047, 0.5039980411529541, 0.5299854278564453, 0.4721806049346924, 0.4559049606323242, 0.5099163055419922, 0.2567121982574463, 0.2356281280517578, 0.48165369033813477, 0.5361278057098389, 0.43184876441955566, 0.4845123291015625, 0.5261526107788086, 0.56931471824646, 0.5089671611785889, 0.493605375289917, 0.4541792869567871, 0.4817814826965332, 0.4941890239715576, 0.5700838565826416, 0.5174970626831055, 0.4741072654724121, 0.5020473003387451, 0.4841125011444092, 0.5136945247650146, 0.5240793228149414, 0.4240748882293701, 0.49967336654663086, 0.5159838199615479, 0.5140469074249268, 0.5344662666320801, 0.44974279403686523, 0.5141563415527344, 0.5019757747650146, 0.5143053531646729, 0.5318417549133301, 0.47567009925842285, 0.4783439636230469, 0.4553956985473633, 0.524709939956665, 0.536884069442749, 0.5028581619262695, 0.4542207717895508, 0.5280747413635254, 0.5499415397644043, 0.459575891494751, 0.5141222476959229, 0.5139503479003906, 0.5223937034606934, 0.4421112537384033, 0.4675424098968506, 0.5677652359008789, 0.48027777671813965, 0.4814271926879883, 0.4865422248840332, 0.536358118057251, 0.4870944023132324, 0.5248517990112305, 0.4775364398956299, 0.5656933784484863, 0.41273045539855957, 0.47574806213378906, 0.522209644317627, 0.5573132038116455, 0.4021315574645996, 0.4841015338897705, 0.3706667423248291, 0.37523436546325684, 0.2987031936645508, 0.2419898509979248, 0.3157975673675537, 0.23936867713928223, 0.26656675338745117, 0.43969130516052246, 0.5301263332366943, 0.5141708850860596, 0.5093994140625, 0.5039172172546387, 0.4639592170715332, 0.41907548904418945, 0.6048667430877686, 0.46300578117370605, 0.5175647735595703, 0.4997243881225586, 0.5161621570587158, 0.5220026969909668, 0.4702897071838379, 0.5063273906707764, 0.498060941696167, 0.4670882225036621, 0.5079092979431152, 0.5201249122619629, 0.514542818069458, 0.48180675506591797, 0.5500905513763428, 0.4762260913848877, 0.43781161308288574, 0.30164575576782227, 0.3025546073913574, 0.2578418254852295, 0.2498788833618164, 0.26013946533203125, 0.26151466369628906, 0.4403085708618164, 0.4521939754486084, 0.4878509044647217, 0.5283770561218262, 0.5097286701202393, 0.5323028564453125, 0.46979665756225586, 0.4996979236602783, 0.4984114170074463, 0.18737053871154785, 0.3262324333190918, 0.5080468654632568, 0.22818279266357422, 0.261883020401001, 0.4461987018585205, 0.2439584732055664, 0.2878720760345459, 0.5141706466674805, 0.27008986473083496, 0.27567052841186523, 0.5003378391265869, 0.47543907165527344, 0.45815229415893555, 0.5200378894805908, 0.4884512424468994, 0.48160219192504883, 0.46759462356567383, 0.5299153327941895, 0.5163390636444092, 0.5795810222625732, 0.4145951271057129, 0.5015780925750732, 0.5099010467529297, 0.5367834568023682, 0.4616844654083252, 0.47160768508911133, 0.5185556411743164, 0.49991798400878906, 0.4663543701171875, 0.30149149894714355, 0.2936246395111084, 0.44821953773498535, 0.5201189517974854, 0.4999964237213135, 0.49254941940307617, 0.513413667678833, 0.4504103660583496, 0.5500085353851318, 0.503915548324585, 0.486102819442749, 0.4895195960998535, 0.5421452522277832, 0.4298219680786133, 0.4644184112548828, 0.5773794651031494, 0.48009395599365234, 0.5467350482940674, 0.43962860107421875, 0.5139610767364502, 0.49587011337280273, 0.5285091400146484, 0.5013980865478516, 0.4905381202697754, 0.5392858982086182, 0.4706881046295166, 0.5056982040405273, 0.4739043712615967, 0.5764739513397217, 0.4192359447479248, 0.5121426582336426, 0.5004222393035889, 0.5115628242492676, 0.5025532245635986],
        attackPatterns: [2, 1, 4, 3, 2, 4, 2, 1, 3, 2, 2, 2, 4, 2, 1, 4, 3, 2, 2, 2, 2, 1, 3, 2, 4, 1, 2, 3, 2, 4, 2, 4, 2, 1, 3, 2, 4, 2, 4, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 4, 2, 1, 3, 1, 3, 2, 4, 2, 4, 2, 4, 2, 1, 3, 2, 4, 3, 1, 4, 3, 2, 2, 2, 4, 2, 4, 2, 1, 3, 1, 3, 2, 4, 2, 4, 1, 3, 1, 3, 2, 4, 2, 4, 1, 3, 1, 3, 2, 4, 3, 1, 2, 4, 4, 1, 3, 2, 4, 1, 2, 4, 3, 2, 2, 2, 1, 1, 1, 3, 3, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 4, 3, 1, 3, 2, 4, 2, 2, 4, 4, 1, 3, 2, 2, 2, 2, 1, 3, 3, 2, 1, 3, 2, 4, 2, 4, 1, 3, 2, 2, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 4, 1, 3, 2, 4, 2],
        dialogue: [
            ["Another contender?"],
            ["When will you people learn..."],
            [""],
            ["Let's see if you can get past me."],
            [""]
          ],
        dialogueIntervall: [2,3,80,2,300],
        enemyCreationInterval: 500,
        distanceX : 500,
        distanceY : 500,
        speedMultiplier: 0.7
    },

    enemy2: {
        name: "Kudret",  
        health: 100,    
        timings:[6.55,0.375946044921875, 0.3878307342529297, 0.3925166130065918, 0.40358805656433105, 0.3896141052246094, 0.36396360397338867, 0.370089054107666, 0.36195874214172363, 0.36190176010131836, 0.37592601776123047, 0.37839317321777344, 0.3939549922943115, 0.37151479721069336, 0.37062621116638184, 0.3734931945800781, 0.3702366352081299, 0.36600160598754883, 0.37975478172302246, 0.33629822731018066, 0.40586328506469727, 0.38237619400024414, 0.37764930725097656, 0.41672444343566895, 0.39787888526916504, 0.33321046829223633, 0.39659762382507324, 0.36427927017211914, 0.36136674880981445, 0.37055039405822754, 0.3635385036468506, 0.36020755767822266, 0.382387638092041, 0.36161065101623535, 0.42924046516418457, 0.39317750930786133, 0.38152289390563965, 0.37635278701782227, 0.3060288429260254, 0.40196871757507324, 0.39586639404296875, 2.9433677196502686, 0.36044883728027344, 0.4394705295562744, 0.37682390213012695, 0.4019436836242676, 0.39725327491760254, 0.3547799587249756, 0.3657362461090088, 0.3520073890686035, 0.3100094795227051, 0.4417715072631836, 0.39631152153015137, 0.3956875801086426, 0.30777788162231445, 0.379868745803833, 0.4001891613006592, 0.39849328994750977, 0.392014741897583, 0.34787702560424805, 0.34197139739990234, 0.35189127922058105, 0.3716878890991211, 0.3962554931640625, 0.3914783000946045, 0.36022257804870605, 0.38281965255737305, 0.3778550624847412, 0.38381075859069824, 0.39232826232910156, 0.345231294631958, 0.3785984516143799, 0.38219165802001953, 0.4140028953552246, 0.2978990077972412, 0.3798248767852783, 0.32211995124816895, 0.4581794738769531, 0.24768543243408203, 0.4922809600830078, 0.3976268768310547, 0.36162662506103516, 0.36028194427490234, 0.41405820846557617, 0.37155842781066895, 0.39002346992492676, 0.3420257568359375, 0.3786957263946533, 0.38336634635925293, 0.3621501922607422, 0.3843986988067627, 0.3642570972442627, 0.33560895919799805, 0.37234950065612793, 0.3693244457244873, 0.43638014793395996, 0.4100632667541504, 0.3141794204711914, 0.38944101333618164, 0.3923377990722656, 0.3441591262817383, 0.4597513675689697, 0.4339170455932617, 0.3316957950592041, 3.699951171875, 0.3341073989868164, 2.6578707695007324, 0.33643436431884766, 2.605736494064331, 0.35666441917419434, 0.39972376823425293, 0.3921327590942383, 0.1775362491607666, 0.3880894184112549, 0.1957263946533203, 0.35794568061828613, 0.36058974266052246, 0.399310827255249, 0.3709573745727539, 0.3831031322479248, 0.35010337829589844, 0.39873838424682617, 0.3611721992492676, 0.40245819091796875, 0.32386326789855957, 0.4199647903442383, 0.40175342559814453, 0.3899965286254883, 0.32075953483581543, 0.3951544761657715, 0.37627625465393066, 0.39606761932373047, 0.340512752532959, 0.3534672260284424, 0.4006063938140869, 0.3958284854888916, 0.385892391204834, 0.3460843563079834, 0.3619556427001953, 0.3934295177459717, 0.3559539318084717, 0.3828864097595215, 0.36949992179870605, 0.40245699882507324, 0.35375475883483887, 0.36200666427612305, 0.41817378997802734, 0.36511683464050293, 0.3781900405883789, 0.34468984603881836, 0.37918734550476074, 0.36046791076660156, 0.404177188873291, 0.32356953620910645, 0.41827893257141113, 0.3383967876434326, 0.42504262924194336, 0.34691905975341797, 0.39177846908569336, 0.4013478755950928, 0.3304941654205322, 0.19624733924865723, 0.4234795570373535, 0.4361109733581543, 0.4377553462982178, 0.3742246627807617, 0.43587446212768555, 0.4623560905456543, 0.35993027687072754, 0.4343583583831787, 0.4031789302825928, 0.4780588150024414, 0.4439530372619629, 0.401623010635376, 0.3867626190185547, 0.3821756839752197, 0.3393440246582031, 0.37628960609436035, 0.36048269271850586, 0.3518490791320801, 0.40176844596862793, 0.38197946548461914, 0.37261152267456055, 0.39987850189208984, 0.3199031352996826, 0.41327953338623047, 0.3526780605316162, 0.3960437774658203, 0.3514139652252197, 0.3822345733642578, 0.35822057723999023, 0.36368227005004883, 0.33055949211120605, 0.42780518531799316, 0.3919093608856201, 0.39994287490844727, 0.37216806411743164, 0.3613550662994385, 0.28200864791870117, 0.5324852466583252, 0.1844334602355957, 0.511155366897583, 0.19682693481445312, 0.5091419219970703, 0.3721189498901367, 0.3665142059326172, 0.4239041805267334, 0.38622593879699707, 0.1900169849395752],
        attackPatterns:[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 1, 1, 1, 2, 4, 3, 1, 2, 4, 2, 2, 3, 1, 2, 2, 4, 4, 4, 2, 2, 3, 2, 3, 2, 2, 2, 2, 1, 1, 1, 1, 3, 2, 4, 2, 2, 2, 1, 1, 3, 3, 2, 2, 4, 2, 4, 2, 2, 2, 2, 2, 1, 3, 2, 2, 4, 4, 2, 2, 1, 3, 2, 2, 4, 2, 4, 2, 1, 2, 3, 2, 1, 4, 4, 4, 2, 2, 1, 3, 2, 4, 2, 4, 2, 1, 3, 1, 3, 2, 4, 2, 4, 2, 4, 2, 1, 3, 2, 2, 4, 2, 4, 1, 3, 2, 4, 2, 4, 2, 4, 2, 1, 3, 2, 4, 2, 3, 1, 2, 4, 2, 4, 2, 2, 2, 2, 2, 1, 1, 3, 3, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 3, 2, 1, 4, 4, 4, 2, 2, 3, 2, 2, 2, 2, 2, 2, 1, 4, 3, 2, 2, 2], 
        dialogue: [
            ["Another contender?"],
            ["When will you people learn..."],
            [""],
            ["Let's see if you can get past me."],
            [""]
          ],
        dialogueIntervall: [2,3,80,2,300],
        enemyCreationInterval: 500,
        distanceX : 500,
        distanceY : 500,
        speedMultiplier: 0.7
    },
    
    enemy3: {
        name: "Vayvay",  
        health: 100,     
        timings:[4.28,0.6401302814483643, 0.6803843975067139, 0.3253138065338135, 0.1722550392150879, 0.17023777961730957, 0.29019951820373535, 0.3378722667694092, 0.6617164611816406, 0.6598765850067139, 0.27243995666503906, 0.21568036079406738, 0.1820676326751709, 0.2960524559020996, 0.35351014137268066, 0.6643877029418945, 0.685748815536499, 0.30031824111938477, 0.15427780151367188, 0.16126728057861328, 0.28202104568481445, 0.3385286331176758, 0.31549978256225586, 0.19053173065185547, 0.1794888973236084, 0.30217432975769043, 0.3256254196166992, 0.30434513092041016, 0.19784998893737793, 0.16432881355285645, 0.3222923278808594, 0.3098123073577881, 0.6654026508331299, 0.1448373794555664, 0.1831836700439453, 0.36606359481811523, 0.33002495765686035, 0.16861629486083984, 0.19417357444763184, 0.27538347244262695, 0.33043885231018066, 0.6758060455322266, 0.14986658096313477, 0.20433974266052246, 0.29384422302246094, 0.33392786979675293, 0.18749523162841797, 0.18006277084350586, 0.2884535789489746, 0.32192349433898926, 0.6764023303985596, 0.15799307823181152, 0.20713090896606445, 0.31429123878479004, 0.31206774711608887, 0.1660630702972412, 0.18613910675048828, 0.3064448833465576, 0.3217275142669678, 0.3293650150299072, 0.1826310157775879, 0.15322279930114746, 0.2762868404388428, 0.33256006240844727, 0.3716251850128174, 0.18399858474731445, 0.20604729652404785, 0.300443172454834, 0.29761481285095215, 0.34551501274108887, 0.3001580238342285, 0.3264431953430176, 0.33997344970703125, 0.34560108184814453, 0.2978031635284424, 0.3322124481201172, 0.28400588035583496, 0.36028027534484863, 0.3155214786529541, 0.3289194107055664, 0.30744266510009766, 0.29436779022216797, 0.3680896759033203, 0.3637576103210449, 0.36409544944763184, 0.31160664558410645, 0.338454008102417, 0.3013784885406494, 0.3580620288848877, 0.3302757740020752, 0.35166358947753906, 0.29871249198913574, 0.3332335948944092, 0.30002284049987793, 0.3459208011627197, 0.2904636859893799, 0.3820035457611084, 0.2613985538482666, 0.24039125442504883, 0.1998283863067627, 0.27591466903686523, 0.0009996891021728516, 0.33153414726257324, 0.6780514717102051, 0.6058051586151123, 0.6564102172851562, 0.6675734519958496, 0.6137087345123291, 0.6479182243347168, 0.704155683517456, 0.7145309448242188, 0.35179853439331055, 0.34844517707824707, 0.2714390754699707, 0.31554627418518066, 0.47237086296081543, 0.4243319034576416, 0.35141468048095703, 0.3747572898864746, 0.35574889183044434, 0.35633063316345215, 0.34365344047546387, 0.3356516361236572, 0.31828856468200684, 0.35396337509155273, 0.28190064430236816, 0.3144569396972656, 0.3073863983154297, 0.3540983200073242, 0.3623833656311035, 0.3741490840911865, 0.29604291915893555, 0.3494296073913574, 0.3022770881652832, 0.34433674812316895, 0.32304930686950684, 0.3088569641113281, 0.30726051330566406, 0.3247525691986084, 0.19960713386535645, 0.1982576847076416, 0.32823753356933594, 0.3138158321380615, 0.33333921432495117, 0.18066692352294922, 0.16756987571716309, 0.3341867923736572, 0.30397939682006836, 0.2982912063598633, 0.197251558303833, 0.1867048740386963, 0.2937169075012207, 0.3303825855255127, 0.31325387954711914, 0.16585922241210938, 0.17884135246276855, 0.3238205909729004, 0.305713415145874, 0.39197659492492676, 0.18058204650878906, 0.18805837631225586, 0.34192848205566406, 0.2974393367767334, 0.24382829666137695, 0.3727450370788574, 0.2578251361846924, 0.029911279678344727, 0.3261697292327881, 0.34366559982299805, 0.17617297172546387, 0.18230462074279785, 0.31730127334594727, 0.3517155647277832, 0.25676584243774414, 0.030537843704223633, 0.37723803520202637, 0.6297011375427246, 0.31653404235839844, 0.17338967323303223, 0.19245290756225586, 0.28186893463134766, 0.3460683822631836, 0.6539545059204102, 0.6237423419952393, 0.39217042922973633, 0.16842412948608398, 0.1793215274810791, 0.288165807723999, 0.3579392433166504, 0.31258535385131836, 0.1715996265411377, 0.18403196334838867, 0.31783580780029297, 0.2457275390625, 0.3545858860015869, 0.1754751205444336, 0.1826322078704834, 0.3280372619628906, 0.33600521087646484, 0.48166489601135254, 0.219926118850708, 0.35823917388916016, 0.32036733627319336, 0.18106818199157715, 0.39643263816833496, 0.6582505702972412, 0.17394685745239258, 0.36017322540283203, 0.18168115615844727, 0.34233641624450684, 0.2932713031768799, 0.22594404220581055, 0.4124867916107178, 0.3522989749908447, 0.29178452491760254, 0.3160519599914551, 0.37734508514404297, 0.33858728408813477, 0.339444637298584, 0.32880210876464844, 0.32369518280029297, 0.30382442474365234, 0.33835673332214355, 0.2879624366760254, 0.38744640350341797, 0.04874372482299805, 0.2975130081176758, 0.31621885299682617, 0.3062286376953125, 0.3916447162628174, 0.26168012619018555, 0.3505687713623047, 0.15154409408569336, 0.43834805488586426, 0.1894359588623047, 0.5580847263336182, 0.17242193222045898, 0.4683189392089844, 0.32763075828552246, 0.38209009170532227, 0.16947412490844727, 0.4286613464355469, 0.32163023948669434, 0.32194018363952637, 0.30832767486572266, 0.32981300354003906, 0.340456485748291, 0.29128241539001465, 0.3742849826812744, 0.3344299793243408, 0.36191844940185547, 0.36570143699645996, 0.29027247428894043, 0.29601502418518066, 0.343858003616333, 0.3316619396209717, 0.30220460891723633, 0.3694136142730713, 0.33492398262023926, 0.33176398277282715, 0.2942349910736084, 0.32321596145629883, 0.502497673034668, 0.27407360076904297, 0.21793508529663086, 0.4817202091217041, 0.18216371536254883, 0.17567110061645508, 0.2945380210876465, 0.15989899635314941, 0.29378724098205566, 0.3562660217285156, 0.403949499130249, 0.15425825119018555, 0.44390010833740234, 0.3899354934692383, 0.37223124504089355, 0.16748261451721191, 0.32791972160339355, 0.4224731922149658, 0.3818631172180176, 0.16022562980651855, 0.2273879051208496, 0.5296857357025146, 0.4348175525665283, 0.15964722633361816, 0.1963491439819336, 0.4939556121826172, 0.40334534645080566, 0.18228816986083984, 0.18845486640930176, 0.5195796489715576, 0.39780569076538086, 0.1681537628173828, 0.1802055835723877, 0.4617295265197754, 0.4625976085662842, 0.3894352912902832, 0.3298976421356201, 0.3299739360809326, 0.3344905376434326, 0.3292257785797119, 0.308837890625, 0.3297114372253418, 0.3820991516113281, 0.3102560043334961, 0.3280484676361084, 0.3476674556732178, 0.36183810234069824, 0.29407548904418945, 0.3599107265472412, 0.6365141868591309, 0.6832523345947266, 0.6324558258056641, 0.624021053314209, 0.6242492198944092, 0.6511490345001221, 0.651961088180542, 0.6565656661987305, 0.6338925361633301],
        attackPatterns:[2, 1, 3, 3, 3, 3, 3, 2, 1, 3, 3, 3, 3, 2, 2, 1, 2, 2, 2, 2, 2, 3, 1, 1, 1, 3, 3, 3, 3, 3, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 1, 3, 3, 3, 1, 3, 2, 2, 2, 4, 2, 2, 2, 4, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 3, 2, 4, 2, 4, 2, 4, 2, 4, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 2, 4, 2, 4, 2, 2, 4, 2, 1, 3, 2, 1, 3, 2, 4, 2, 1, 3, 2, 1, 3, 3, 3, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 1, 4, 4, 4, 3, 3, 3, 1, 3, 2, 4, 2, 4, 1, 3, 3, 3, 2, 4, 4, 4, 3, 1, 2, 4, 4, 4, 2, 1, 3, 3, 3, 2, 4, 4, 2, 2, 2, 1, 3, 3, 3, 3, 2, 2, 2, 1, 4, 4, 4, 4, 4, 3, 2, 4, 4, 4, 4, 4, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 2, 4, 2, 4, 2, 2, 2, 1, 1, 4, 4, 3, 2, 2, 1, 4, 2, 4, 2, 4, 2, 1, 3, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 2, 2, 4, 4, 2, 2, 4, 4, 2, 2, 4, 1, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 2, 2, 2, 2, 2, 2, 1, 4, 4, 4, 3, 3, 3, 1, 1, 1, 2, 1, 1, 2, 4, 2, 2, 2, 3, 2, 2, 2, 4, 2, 2, 2, 1, 2, 2, 2, 3, 4, 4, 4, 2, 4, 2, 4, 2, 4, 2, 4, 1, 3, 3, 3, 3, 3, 3, 2, 1, 4, 3, 2, 1, 3, 2, 4, 1],
        dialogue: [
            ["Another contender?"],
            ["When will you people learn..."],
            [""],
            ["Let's see if you can get past me."],
            [""]
          ],
        dialogueIntervall: [2,3,80,2,300],
        enemyCreationInterval: 500,
        distanceX : 500,
        distanceY : 500,
        speedMultiplier: 0.7
    },
    
    enemy4: {
        name: "Tengri",  
        health: 100,     
        timings:[0.32836389541625977, 0.32425618171691895, 0.3301658630371094, 0.3695340156555176, 0.3621063232421875, 0.38965392112731934, 0.3325190544128418, 0.40402841567993164, 0.35001635551452637, 0.3713066577911377, 0.3907895088195801, 0.3433995246887207, 0.35809826850891113, 0.399852991104126, 0.40219640731811523, 0.3805348873138428, 0.3495504856109619, 0.4182295799255371, 0.3657071590423584, 0.3865079879760742, 0.3530914783477783, 0.3702731132507324, 0.3566477298736572, 0.3715641498565674, 0.3699216842651367, 0.3963043689727783, 0.35718607902526855, 0.40273261070251465, 0.3655221462249756, 0.38812994956970215, 0.3526594638824463, 0.3935079574584961, 0.3697202205657959, 0.3586862087249756, 0.3759729862213135, 0.3990623950958252, 0.3524012565612793, 0.34996676445007324, 0.35985875129699707, 0.3841700553894043, 3.0385777950286865, 0.14782404899597168, 0.11922669410705566, 0.17220830917358398, 0.1638956069946289, 0.2986726760864258, 0.15809082984924316, 0.0977320671081543, 0.1839005947113037, 0.16405153274536133, 0.16951751708984375, 0.14423012733459473, 0.13850116729736328, 0.17589616775512695, 0.14606332778930664, 0.10329151153564453, 0.1641068458557129, 0.13465023040771484, 0.1153867244720459, 0.0847160816192627, 0.21191096305847168, 0.20559453964233398, 0.1596825122833252, 0.23461675643920898, 0.1775071620941162, 0.16194486618041992, 0.1681210994720459, 0.1598806381225586, 0.13432049751281738, 0.08924245834350586, 0.13701510429382324, 0.11382269859313965, 0.061751365661621094, 0.20976662635803223, 0.08387517929077148, 0.10055780410766602, 0.24558615684509277, 0.25282740592956543, 0.24159479141235352, 0.2162494659423828, 0.1632981300354004, 0.15026354789733887, 0.0845632553100586, 0.14159584045410156, 0.1338977813720703, 0.13006162643432617, 0.09367704391479492, 0.13787341117858887, 0.09694910049438477, 0.1456284523010254, 0.08381414413452148, 0.14971399307250977, 0.11050581932067871, 0.15815114974975586, 0.07773399353027344, 0.14377999305725098, 0.12793374061584473, 0.12413692474365234, 0.08563113212585449, 0.13459229469299316, 0.12809300422668457, 0.12411618232727051, 0.08792662620544434, 0.14000272750854492, 0.008068084716796875, 0.2017049789428711, 0.02445363998413086, 0.22151541709899902, 0.03795933723449707, 0.11809659004211426, 0.16567158699035645, 0.1887497901916504, 0.175123929977417, 0.16409945487976074, 0.1582777500152588, 0.168107271194458, 0.20424342155456543, 0.19342279434204102, 0.4141850471496582, 0.2600228786468506, 0.030928373336791992, 0.02690863609313965, 0.08373475074768066, 0.13055992126464844, 0.15822219848632812, 0.1312413215637207, 0.09246516227722168, 0.15971779823303223, 0.0939016342163086, 0.19664716720581055, 0.10371184349060059, 0.1504523754119873, 0.11507010459899902, 0.18878912925720215, 0.07742094993591309, 0.2506105899810791, 0.1241607666015625, 0.18798279762268066, 0.07531476020812988, 0.1484990119934082, 0.10596728324890137, 0.1578364372253418, 0.1172792911529541, 0.1483628749847412, 0.11405444145202637, 0.17825794219970703, 0.07980751991271973, 0.1456739902496338, 0.12642788887023926, 0.15002727508544922, 0.06576728820800781, 0.14855337142944336, 0.007526397705078125, 0.25841856002807617, 0.06023240089416504, 0.2632107734680176, 0.15629220008850098, 0.1696619987487793, 0.17631053924560547, 0.17199063301086426, 0.1623222827911377, 0.30364131927490234, 0.3877706527709961, 0.1826791763305664, 0.09721612930297852, 0.22872138023376465, 0.1693718433380127, 0.10650825500488281, 0.07804393768310547, 0.1373457908630371, 0.09647822380065918, 0.14370465278625488, 0.08031129837036133, 0.16016268730163574, 0.007999897003173828, 0.213470458984375, 0.07811784744262695, 0.17044663429260254, 0.0019998550415039062, 0.12335848808288574, 0.1304788589477539, 0.0634458065032959, 0.1848902702331543, 0.027319669723510742, 0.09842753410339355, 0.1294844150543213, 0.014017105102539062, 0.2020263671875, 0.028318405151367188, 0.27187538146972656, 0.029749631881713867, 0.19791436195373535, 0.014410018920898438, 0.058020591735839844, 0.19969630241394043, 0.08244156837463379, 0.16412043571472168, 0.08411407470703125, 0.14991354942321777, 0.07353830337524414, 0.21624422073364258, 0.31215429306030273, 0.3638880252838135, 0.3515350818634033, 0.35615062713623047, 0.356386661529541, 0.4261786937713623, 0.3413045406341553, 0.3799614906311035, 0.3926870822906494, 0.3856053352355957, 0.36774492263793945, 0.3721885681152344, 0.41038060188293457, 0.36368322372436523, 0.3765745162963867, 0.3499181270599365, 0.39907050132751465, 0.33421921730041504, 0.3886997699737549, 0.38955140113830566, 0.3582644462585449, 0.3776726722717285, 0.37357068061828613, 0.37040042877197266, 0.38173890113830566, 0.37665677070617676, 0.39783358573913574, 0.38819241523742676, 0.2892594337463379, 0.41254305839538574, 0.36833882331848145, 0.35738182067871094, 0.3665773868560791, 0.4200279712677002, 0.38350844383239746, 0.386075496673584, 0.3482506275177002, 0.36217832565307617, 0.3959486484527588, 0.3952980041503906, 0.37592601776123047, 0.3941354751586914, 0.3725931644439697, 0.3400230407714844, 0.3760237693786621, 0.3636960983276367, 0.4115419387817383, 0.38678860664367676, 0.3700697422027588, 0.31989240646362305, 0.3372228145599365, 0.4464418888092041, 0.3662431240081787, 0.39548754692077637, 0.3663182258605957, 0.3762071132659912, 0.35735201835632324, 0.3866872787475586, 0.3840627670288086, 0.389554500579834, 0.38237714767456055, 0.37349510192871094, 0.37224650382995605, 0.17756056785583496, 0.3778870105743408, 0.17214179039001465, 0.3945019245147705, 0.2413620948791504, 0.4986147880554199, 0.4296395778656006, 0.18031764030456543, 0.5254566669464111, 0.15633726119995117, 0.5218288898468018, 0.16434168815612793, 0.5460083484649658, 0.18626666069030762, 0.3955659866333008, 0.2738642692565918, 0.3602309226989746, 0.33214783668518066, 0.33336734771728516, 0.3884603977203369, 0.4419524669647217, 0.3664886951446533, 0.3958115577697754, 0.4253866672515869, 0.22836780548095703, 0.4461228847503662, 0.18625378608703613, 0.45766687393188477, 0.28769588470458984, 0.45267152786254883, 0.24585938453674316, 0.44736218452453613, 0.3901200294494629, 0.3657991886138916, 0.4003183841705322, 0.35457682609558105, 0.36331772804260254, 0.338517427444458, 0.3240346908569336, 0.47777605056762695, 0.005930900573730469, 0.8183660507202148, 0.16713428497314453, 0.2658042907714844, 0.42104434967041016, 0.1439650058746338, 0.1499173641204834, 0.3996593952178955, 0.23405861854553223, 0.43828845024108887, 0.45154595375061035, 0.4059147834777832, 0.2378685474395752, 0.4263484477996826, 0.40384554862976074, 0.3665919303894043, 0.4556572437286377, 0.37983202934265137, 0.15989375114440918, 0.5006086826324463, 0.21939516067504883, 0.2026841640472412, 0.4139423370361328, 0.19930148124694824, 0.3927435874938965, 0.19548487663269043, 0.34621572494506836, 0.3658747673034668, 0.3421602249145508, 0.33361268043518066, 0.3265204429626465, 0.8335978984832764],
        attackPatterns:[2, 2, 2, 2, 3, 3, 3, 1, 4, 4, 4, 4, 2, 2, 2, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 2, 2, 2, 2, 4, 3, 2, 1, 4, 3, 2, 1, 4, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 2, 2, 1, 4, 3, 2, 1, 4, 3, 2, 3, 1, 4, 3, 2, 4, 2, 2, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 2, 3, 1, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 3, 4, 2, 2, 2, 2, 2, 2, 2, 3, 1, 4, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 3, 3, 4, 1, 2, 3, 3, 4, 1, 2, 3, 4, 2, 1, 1, 4, 3, 2, 1, 2, 3, 1, 3, 1, 3, 2, 4, 2, 4, 2, 4, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 2, 4, 2, 4, 2, 4, 2, 4, 2, 1, 4, 3, 2, 4, 2, 4, 1, 3, 4, 2, 4, 2, 4, 1, 3, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 1, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 4, 2, 2, 2, 1, 1, 4, 4, 3, 3, 2, 4, 2, 4, 2, 4, 3, 1, 4, 2, 4, 2, 4, 1, 3, 2, 4, 4, 2, 4, 2, 4, 2, 4, 4, 3, 4, 4, 3, 2, 1, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 4, 3, 2, 4, 2, 4, 2, 4, 2, 1, 4, 3, 2, 1, 4],
        dialogue: [
            ["Another contender?"],
            ["When will you people learn..."],
            [""],
            ["Let's see if you can get past me."],
            [""]
          ],
        dialogueIntervall: [2,3,80,2,300],
        enemyCreationInterval: 500,
        distanceX : 500,
        distanceY : 500,
        speedMultiplier: 0.7
    },
    

    game: {
        screenWidth: 1366,
        screenHeight: 768,
        stages: [1,2,3,4],
        textGap: 30,
    },

    player: {
        health: 1000,
        speed: 5,
        attackPower: 20,
    },
    
    mainScreen:{
        screenID: 0,
        top: "Kregenone",
        text: [[""]],
        buttons: [
            {
                label: "Start",
                action: () => {
                    console.log("Game Started!");
                    global.currentScreen=5;
                }
            },
            {
                label: "Choose Enemy",
                action: () => {
                    console.log("Settings Opened!");
                    global.currentScreen=7;
                }
            },
            {
                label: "Credits",
                action: () => {
                    console.log("Credits Displayed!");
                    global.gameMusic.stopMusic();
                }
            },
        ],
        font: "mania",
        size: 30,
        width: 200,
        height: 80,
        x: 100,
        y: 300,
        textY: 300,
        gap: 100,
        textX: 0
    },

    pauseScreen:{
        text: ["a","b"],
        buttons: ["Resume","Settings","Credits"],
        font: "mania",
        size: 30,
        width: 100,
        height: 100,
        x: 100,
        y: 100,
        gap: 2000,
        textX: 0
    },
    win:{
        screenID: 6,
        top: "You Won!",
        text: [["Ich hasse Schlümpfe"]],
        buttons: [
            {
                label: "Proceed",
                action: () => {
                    global.gameMusic.stopMusic();
                    console.log("test");
                    global.gameMusic.startMusic();
                    global.currentScreen = 1;
                }
            },
            {
                label: "Title Screen",
                action: () => {
                    console.log("Title Screen!");
                    global.allGameObjects = [];
                    global.enemyCounter = 0;
                    global.enemyAmount = 0;
                    global.hitCounter = 0;
                    global.enemy = global.enemyArray[0];
                    global.hp = gs.player.health;
                    global.isMouseClicked = false;
                    global.currentScreen = 0;
                    global.currentBoss = 0;
                    global.currentScreenValue = gs.mainScreen;
                    console.log("Restart!");
                    global.boss = global.bosses[global.currentBoss];
                }
            },
        ],
        font: "mania",
        size: 30,
        width: 200,
        height: 80,
        x: 100,
        y: 350,
        textY: 500,
        gap: 100,
        color: "Yellow",
        textX: 0
    },
    realWin:{
        screenID: 8,
        top: "You actually Won!",
        text: [["there should have been another enemy but frick that"]],
        buttons: [
            {
                label: "Title Screen",
                action: () => {
                    console.log("Title Screen!");
                    global.allGameObjects = [];
                    global.enemyCounter = 0;
                    global.enemyAmount = 0;
                    global.hitCounter = 0;
                    global.enemy = global.enemyArray[0];
                    global.hp = gs.player.health;
                    global.isMouseClicked = false;
                    global.currentScreen = 0;
                    global.currentBoss = 0;
                    global.currentScreenValue = gs.mainScreen;
                    console.log("Restart!");
                    global.boss = global.bosses[global.currentBoss];
                }
            },
        ],
        font: "mania",
        size: 30,
        width: 200,
        height: 80,
        x: 100,
        y: 350,
        textY: 500,
        gap: 100,
        color: "Yellow",
        textX: 0
    },
    gameOver:{
        screenID: 2,
        top: "Game Over!",
        text: [["Bevor du leidest, besser du meidest."],["– Friedrich Schiller, 2017"]],
        buttons: [
            {
                label: "Try Again!",
                action: () => {
                    console.log("test");
                    global.allGameObjects = [];
                    global.enemyCounter = 0;
                    global.enemyAmount = 0;
                    global.hitCounter = 0;
                    global.enemy = global.enemyArray[0];
                    global.hp = gs.player.health;
                    global.isMouseClicked = false;
                    global.currentScreen = 1;
                    global.currentBoss = 0;
                    global.currentScreenValue = gs.mainScreen;
                    console.log("Restart!");
                    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height);
                    global.gameMusic.startMusic();
                }
            },
            {
                label: "Title Screen",
                action: () => {
                    console.log("Title Screen!");
                    global.allGameObjects = [];
                    global.enemyCounter = 0;
                    global.enemyAmount = 0;
                    global.hitCounter = 0;
                    global.enemy = global.enemyArray[0];
                    global.hp = gs.player.health;
                    global.isMouseClicked = false;
                    global.currentScreen = 0;
                    global.currentBoss = 0;
                    global.currentScreenValue = gs.mainScreen;
                    console.log("Restart!");
                }
            },
            {
                label: "Stats",
                action: () => {
                    console.log("Credits Displayed!");
                }
            },
        ],
        font: "mania",
        size: 30,
        width: 200,
        height: 80,
        x: 100,
        y: 350,
        textY: 500,
        gap: 100,
        color: "red",
        textX: 0
    },
    explanation:{
        screenID: 5,
        top: "",
        text: [["Your village is dying..."],["Ravaged by a terrible disease, the only hope lies in the colosseum of the nobles, where the cure"],["is awarded to the victor. But there's a catch no one has ever won. Four deadly fighters await..."],["Time is against you. The illness has already begun to steal your memories, and each passing moment "],["brings you closer to losing it all. With no choice but to fight."],["Will you risk everything for a chance to save your village?"],["Or will the colosseum be your end?"]],
        buttons: [{
            label: "Proceed!",
            action: () => {

                console.log("Game Started!");
                global.currentScreen=1;
                global.gameMusic.startMusic();
            }
        },],
        font: "mania",
        size: 25,
        width: 300,
        height: 80,
        x: 0,
        y: 650,
        textY: 900,
        gap: 100,
        color: "red",
        textX: -500,
        intervall: 1000,
    },
    chooseEnemy:{
        screenID: 7,
        top: "",
        text: [["Choose who you want to fight..."]],
        buttons: [
            {
                label: "1",
                action: () => {
                    console.log("Game Started!");
                    global.currentScreen=1;
                    global.currentBoss=0;
                    global.boss = global.bosses[global.currentBoss];
                    global.enemy = global.enemyArray[global.currentBoss];
                    global.enemyCounter = 0;
                    global.gameMusic.setMusic(global.musicArray[global.currentBoss]);
                    global.gameMusic.startMusic();
                
                }
            },
            {
                label: "2",
                action: () => {
                    console.log("Settings Opened!");
                    global.currentScreen=1;
                    global.currentBoss=1;
                    global.boss = global.bosses[global.currentBoss];
                    global.enemy = global.enemyArray[global.currentBoss];
                    global.enemyCounter = 0;
                    global.gameMusic.setMusic(global.musicArray[global.currentBoss]);
                    global.gameMusic.startMusic();
                }
            },
            {
                label: "3",
                action: () => {
                    console.log("Credits Displayed!");
                    global.currentScreen=1;
                    global.currentBoss=2;
                    global.boss = global.bosses[global.currentBoss];
                    global.enemy = global.enemyArray[global.currentBoss];
                    global.enemyCounter = 0;
                    global.gameMusic.setMusic(global.musicArray[global.currentBoss]);
                    global.gameMusic.startMusic();
                }
            },
        ],
        font: "mania",
        size: 30,
        width: 200,
        height: 80,
        x: 100,
        y: 300,
        textY: 300,
        gap: 100,
        textX: 0
    },
};
