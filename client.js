const _0x24551=_0x7121;(function(_0x4e2949,_0x438731){const _0x39ed4f=_0x7121,_0x16b911=_0x4e2949();while(!![]){try{const _0x37f597=parseInt(_0x39ed4f(0xd7))/0x1+parseInt(_0x39ed4f(0x78))/0x2*(parseInt(_0x39ed4f(0x77))/0x3)+-parseInt(_0x39ed4f(0xaf))/0x4+-parseInt(_0x39ed4f(0xb3))/0x5+parseInt(_0x39ed4f(0xaa))/0x6*(parseInt(_0x39ed4f(0xa6))/0x7)+parseInt(_0x39ed4f(0xd6))/0x8*(-parseInt(_0x39ed4f(0xad))/0x9)+parseInt(_0x39ed4f(0xc2))/0xa;if(_0x37f597===_0x438731)break;else _0x16b911['push'](_0x16b911['shift']());}catch(_0x3c5281){_0x16b911['push'](_0x16b911['shift']());}}}(_0x4497,0x4c88e));const client=require(_0x24551(0x9e)),http=require(_0x24551(0xbc)),BigInt=require(_0x24551(0xa4)),chalk=require(_0x24551(0xcc)),{ArgumentParser}=require(_0x24551(0x7a)),{version}=require(_0x24551(0xb9)),parser=new ArgumentParser({'description':_0x24551(0x7e)});function _0x4497(){const _0x458b7b=['--timeout','rejectedShares','[SHARE]\x20Rejected.\x20','\x22<b_value>\x22',',\x20difficulty:\x20','startTime','prevhash','1222072TBmpiG','51581hggWZG','3100','120603iQUwAR','4QyFIcu','writeHead','argparse','push','[JOB]','clean_jobs','Ergo\x27s\x20proxy','message','extraNonce1','stats','[CONNECTION]\x20Connected\x20to\x20server.','floor','New\x20job\x20received.\x20Job\x20ID:\x20','[SUBSCRIBE]\x20Nonce:\x20','server\x20listening\x20port','log','cyanBright','extraNonce2Size','[DIFFICULTY]\x20New\x20difficulty:\x20','/mini/job/completed','server',',\x20nonce\x20size:\x20','listen','port','timeout','password','worker\x20password','application/json','red','replace','--password','miningDiff','createServer','intervals','end','submit','<b_value>','client','stratum-client','\x0a----------------------------------------','parse_args','shutdown','{\x22status\x22:\x20\x22fail\x22}','minus','big-integer','nbits','21ZIBzbT','add_argument','connect','destroy','189258BORqWT','/mini/solution',',\x20height:\x20','9VzzrYX','server\x20ip\x20address','1330544IUawde','listening\x20port','coinb1','stringify','2920375xyHgjx','{\x22status\x22:\x20\x22OK\x22}','acceptedShares','[WORKER]\x20Authorized.','Running\x20at\x20http://localhost:','--server','./package.json','[SHARE]\x20Accepted.','Time\x20elapsed:\x20','http','substr','--port','greenBright','worker','--worker','11563440lYaRPR','write','splice','jobId','connection\x20timeout','version','jobs','Accepted:\x20','length','equals','chalk','yellowBright','parse'];_0x4497=function(){return _0x458b7b;};return _0x4497();}parser['add_argument']('-v','--version',{'action':_0x24551(0xc7),'version':version}),parser[_0x24551(0xa7)]('-s',_0x24551(0xb8),{'help':_0x24551(0xae),'default':'3.12.229.36'}),parser[_0x24551(0xa7)]('-p',_0x24551(0xbe),{'help':_0x24551(0x86),'default':_0x24551(0xd8)}),parser['add_argument']('-u',_0x24551(0xc1),{'help':'worker\x20name','default':'x'}),parser[_0x24551(0xa7)]('-w',_0x24551(0x96),{'help':_0x24551(0x92),'default':'x'}),parser[_0x24551(0xa7)]('-l','--listen',{'help':_0x24551(0xb0),'default':0xbb8}),parser[_0x24551(0xa7)]('-t',_0x24551(0xcf),{'help':_0x24551(0xc6),'default':0x1e}),args=parser[_0x24551(0xa0)]();let parameters={'jobs':[],'acceptedShares':0x0,'rejectedShares':0x0,'startTime':new Date(),'intervals':{'stats':null,'connect':null},'client':null};const showStats=()=>{const _0x37d165=_0x24551;let _0x27f9b7=new Date(),_0x354586=(_0x27f9b7-parameters[_0x37d165(0xd4)])/0x3e8,_0x271ef9=Math[_0x37d165(0x83)](_0x354586/0xe10),_0xf6dfe7=Math[_0x37d165(0x83)]((_0x354586-_0x271ef9*0xe10)/0x3c);_0xf6dfe7<0xa&&(_0xf6dfe7='0'+_0xf6dfe7),console[_0x37d165(0x87)](chalk['cyanBright'](_0x37d165(0x9f))),console['log'](chalk[_0x37d165(0x88)](_0x37d165(0xc9)+parameters['acceptedShares'])),console[_0x37d165(0x87)](chalk[_0x37d165(0x88)]('Rejected:\x20'+parameters[_0x37d165(0xd0)])),console[_0x37d165(0x87)](chalk['cyanBright'](_0x37d165(0xbb)+_0x271ef9+':'+_0xf6dfe7)),console['log'](chalk['cyanBright']('----------------------------------------\x0a'));};let options={'server':args[_0x24551(0x8c)],'port':args[_0x24551(0x8f)],'worker':args[_0x24551(0xc0)],'password':args[_0x24551(0x91)],'autoReconnectOnError':![],'onConnect':()=>{const _0x2a1654=_0x24551;console[_0x2a1654(0x87)](chalk[_0x2a1654(0xbf)](_0x2a1654(0x82))),parameters[_0x2a1654(0x99)][_0x2a1654(0x81)]=setInterval(()=>{showStats();},0x3e8*0x3c),parameters[_0x2a1654(0x99)][_0x2a1654(0xa8)]!==null&&(clearInterval(parameters['intervals'][_0x2a1654(0xa8)]),parameters[_0x2a1654(0x99)][_0x2a1654(0xa8)]=null);},'onClose':()=>{const _0x37ab25=_0x24551;parameters[_0x37ab25(0xc8)]=[],console['log'](chalk[_0x37ab25(0x94)]('[CONNECTION]\x20Disconnected\x20from\x20server.')),parameters['intervals']['stats']&&clearInterval(parameters[_0x37ab25(0x99)][_0x37ab25(0x81)]),!parameters[_0x37ab25(0x99)][_0x37ab25(0xa8)]&&(parameters['client']['client'][_0x37ab25(0xa9)](),parameters[_0x37ab25(0x9d)][_0x37ab25(0xa1)](),parameters[_0x37ab25(0x9d)]=null,connect());},'onError':_0x32e704=>{const _0x1e30f3=_0x24551;console['log'](chalk[_0x1e30f3(0x94)]('[ERROR]\x20'+_0x32e704[_0x1e30f3(0x7f)]));},'onAuthorizeSuccess':()=>{const _0x4f5dbd=_0x24551;console['log'](chalk[_0x4f5dbd(0xbf)](_0x4f5dbd(0xb6)));},'onAuthorizeFail':()=>{const _0x1e5402=_0x24551;console[_0x1e5402(0x87)](chalk[_0x1e5402(0x94)]('[WORKER]\x20Unable\x20to\x20authorize.'));},'onNewDifficulty':_0x242d91=>{const _0x397dbc=_0x24551;console['log'](chalk[_0x397dbc(0x88)](_0x397dbc(0x8a)+_0x242d91));},'onSubscribe':_0x292fd9=>{const _0x4e18bd=_0x24551;console['log'](chalk['cyanBright'](_0x4e18bd(0x85)+_0x292fd9[_0x4e18bd(0x80)]+_0x4e18bd(0x8d)+_0x292fd9[_0x4e18bd(0x89)]));},'onNewMiningWork':_0x2f056c=>{const _0x389b5d=_0x24551;console[_0x389b5d(0x87)](_0x389b5d(0x7c),_0x389b5d(0x84)+_0x2f056c['jobId']+_0x389b5d(0xd3)+_0x2f056c[_0x389b5d(0x97)]+_0x389b5d(0xac)+_0x2f056c[_0x389b5d(0xd5)]);_0x2f056c[_0x389b5d(0x7d)]&&(parameters['jobs']=[]);let _0x35ea35=![];for(let _0x10cbf0=0x0;_0x10cbf0<parameters[_0x389b5d(0xc8)][_0x389b5d(0xca)];_0x10cbf0++){let _0x5d7b53=parameters[_0x389b5d(0xc8)][_0x10cbf0];if(_0x2f056c[_0x389b5d(0xb1)]===_0x5d7b53[_0x389b5d(0xb1)]&&_0x2f056c[_0x389b5d(0x80)]===_0x5d7b53[_0x389b5d(0x80)]){_0x35ea35=!![];break;}}!_0x35ea35&&parameters[_0x389b5d(0xc8)][_0x389b5d(0x7b)](_0x2f056c);},'onSubmitWorkSuccess':(_0x38e2da,_0x279045)=>{const _0x17a411=_0x24551;parameters[_0x17a411(0xb5)]+=0x1,console[_0x17a411(0x87)](chalk['greenBright'](_0x17a411(0xba)));},'onSubmitWorkFail':(_0x5464fb,_0x559519)=>{const _0x98b8a8=_0x24551;parameters[_0x98b8a8(0xd0)]+=0x1,console['log'](chalk[_0x98b8a8(0x94)](_0x98b8a8(0xd1)+_0x5464fb));}};function _0x7121(_0x1cf67b,_0x52cb65){const _0x449773=_0x4497();return _0x7121=function(_0x712191,_0x132264){_0x712191=_0x712191-0x77;let _0x398c2a=_0x449773[_0x712191];return _0x398c2a;},_0x7121(_0x1cf67b,_0x52cb65);}function doConnect(){const _0x5522bc=_0x24551;parameters[_0x5522bc(0x9d)]&&parameters['client'][_0x5522bc(0xa1)](),parameters[_0x5522bc(0x9d)]=client(options);}function connect(_0x3851e8=![]){const _0x54f3f1=_0x24551;_0x3851e8&&doConnect(),parameters[_0x54f3f1(0x99)][_0x54f3f1(0xa8)]=setInterval(()=>doConnect(),args[_0x54f3f1(0x90)]*0x3e8);}connect(!![]);const handle_candidate=(_0x397623,_0x2cc144)=>{const _0x548a8a=_0x24551;_0x2cc144[_0x548a8a(0x79)](0xc8,{'Content-Type':_0x548a8a(0x93)});var _0x44bd29=parameters[_0x548a8a(0xc8)][0x0];if(_0x44bd29){var _0x26317e=JSON['stringify']({'msg':_0x44bd29[_0x548a8a(0xb1)],'b':_0x548a8a(0x9c),'extraNonce1':_0x44bd29[_0x548a8a(0x80)],'extraNonce2Size':_0x44bd29['extraNonce2Size'],'height':_0x44bd29[_0x548a8a(0xd5)]});const _0x1265e3=BigInt(_0x44bd29['miningDiff'])[_0x548a8a(0xcb)](BigInt(0x0))?BigInt(_0x44bd29[_0x548a8a(0xa5)]):BigInt(_0x44bd29['nbits'])[_0x548a8a(0xa3)](BigInt(0x1))['multiply'](BigInt(_0x44bd29[_0x548a8a(0x97)]));_0x26317e=_0x26317e[_0x548a8a(0x95)](_0x548a8a(0xd2),_0x1265e3['toString']());}else _0x26317e='{}';_0x2cc144[_0x548a8a(0xc3)](_0x26317e),_0x2cc144[_0x548a8a(0x9a)]();},handle_job_completed=(_0x44bb58,_0x53b343)=>{const _0x3a985c=_0x24551;_0x53b343[_0x3a985c(0x79)](0xc8,{'Content-Type':_0x3a985c(0x93)}),parameters[_0x3a985c(0xc8)][_0x3a985c(0xc4)](0x0,0x1),_0x53b343[_0x3a985c(0xc3)](_0x3a985c(0xb4)),_0x53b343[_0x3a985c(0x9a)]();},handle_submit_solution=(_0x2cf6eb,_0x1582b2)=>{const _0xe48a03=_0x24551;var _0x362488=parameters[_0xe48a03(0xc8)][0x0];if(_0x362488){var _0x3e23d3='';_0x2cf6eb['on']('data',function(_0x1dfc3f){_0x3e23d3+=_0x1dfc3f;}),_0x2cf6eb['on'](_0xe48a03(0x9a),function(){const _0x95585e=_0xe48a03;_0x3e23d3=JSON[_0x95585e(0xce)](_0x3e23d3);var _0x30ba36=_0x3e23d3['n'],_0x4b5232=_0x30ba36[_0x95585e(0xbd)](_0x362488[_0x95585e(0x80)][_0x95585e(0xca)]);parameters[_0x95585e(0x9d)][_0x95585e(0x9b)]({'worker_name':args[_0x95585e(0xc0)],'job_id':_0x362488[_0x95585e(0xc5)],'nonce':_0x30ba36,'extranonce2':_0x4b5232});var _0xd3a7ad=JSON[_0x95585e(0xb2)]({'status':'OK'});_0x1582b2['write'](_0xd3a7ad),_0x1582b2[_0x95585e(0x9a)]();});}else _0x1582b2[_0xe48a03(0xc3)](_0xe48a03(0xa2));},server=http[_0x24551(0x98)]((_0x31158f,_0x2809f6)=>{const _0xe2996d=_0x24551;switch(_0x31158f['url']){case'/mini/candidate':handle_candidate(_0x31158f,_0x2809f6);break;case _0xe2996d(0xab):handle_submit_solution(_0x31158f,_0x2809f6);break;case _0xe2996d(0x8b):handle_job_completed(_0x31158f,_0x2809f6);break;default:_0x2809f6[_0xe2996d(0xc3)]('{\x22status\x22:\x20\x22fail\x22}'),_0x2809f6['end']();}});server[_0x24551(0x8e)](args[_0x24551(0x8e)],()=>{const _0x59d4de=_0x24551;console[_0x59d4de(0x87)](chalk[_0x59d4de(0xcd)]('Ergo\x20Proxy')),console[_0x59d4de(0x87)](chalk[_0x59d4de(0xcd)](_0x59d4de(0xb7)+args[_0x59d4de(0x8e)])),console[_0x59d4de(0x87)](chalk['yellowBright']('--------------------------------------------------\x0a'));});
