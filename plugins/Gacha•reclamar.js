/*
《✧》DERECHOS RESERVADOS POR EL AUTOR 《✧》
- DavidChian (@David-Chian)
*/

function _0x15d2(){const _0x3bd789=['confirmar','\x20minutos\x20','《✧》Debes\x20esperar\x20*','✧\x20Error\x20al\x20leer\x20package.json:','readFileSync','name','《✧》El\x20personaje\x20','811689wJowDk','error','2AUTqOh','repository','characterCount','《✧》\x20Felicidades\x20@','2062848CkhNzu','765phkNao','userId','existsSync','stringify','\x20ya\x20es\x20de\x20otro\x20usuario\x20y\x20no\x20puedes\x20robarlo.\x0aPrueba\x20suerte\x20con\x20el\x20comando\x20!robarp','sendMessage','getName','command','*\x20ha\x20sido\x20reclamado\x20por\x20*@','value','some','5EJYpEh','\x20de\x20@','《✧》No\x20has\x20podido\x20robar\x20el\x20personaje\x20','quoted','filter','split','tags','✧\x20Este\x20comando\x20solo\x20es\x20disponible\x20en\x20YotsubaBot-MD\x0a◇\x20https://github.com/Alba070503/YotsubaBot-MD','./package.json','591608swKNMq','48470AEdXyi','parse','help','261267TpBfYg','git+https://github.com/Nimodo83/Yue-Bot.git','Yue-Bot','push','gacha',',\x20has\x20robado\x20a\x20','✰\x20*','utf-8','personajesReservados','url','1067yfeuoM','usuarios','chat','《✧》Lo\x20siento,\x20el\x20personaje\x20no\x20está\x20disponible\x20por\x20el\x20momento.','data.json','reply','14792PqSDqE','1247554xGcNQB','register','text','characters','writeFileSync'];_0x15d2=function(){return _0x3bd789;};return _0x15d2();}const _0x4073c9=_0xe12a;(function(_0x1ac210,_0x232ace){const _0x51e28f=_0xe12a,_0x1a4bcd=_0x1ac210();while(!![]){try{const _0x51d7d6=parseInt(_0x51e28f(0xbd))/0x1+parseInt(_0x51e28f(0xa0))/0x2*(parseInt(_0x51e28f(0x9e))/0x3)+-parseInt(_0x51e28f(0xb9))/0x4+parseInt(_0x51e28f(0xb0))/0x5*(-parseInt(_0x51e28f(0xa4))/0x6)+-parseInt(_0x51e28f(0xce))/0x7+parseInt(_0x51e28f(0xcd))/0x8*(-parseInt(_0x51e28f(0xa5))/0x9)+parseInt(_0x51e28f(0xba))/0xa*(parseInt(_0x51e28f(0xc7))/0xb);if(_0x51d7d6===_0x232ace)break;else _0x1a4bcd['push'](_0x1a4bcd['shift']());}catch(_0x1675d6){_0x1a4bcd['push'](_0x1a4bcd['shift']());}}}(_0x15d2,0x2ab2c));import _0x4d1198 from'fs';let cooldowns={};function _0xe12a(_0xc00db5,_0x292ed2){const _0x15d21b=_0x15d2();return _0xe12a=function(_0xe12aa5,_0xccb874){_0xe12aa5=_0xe12aa5-0x96;let _0x26e8bc=_0x15d21b[_0xe12aa5];return _0x26e8bc;},_0xe12a(_0xc00db5,_0x292ed2);}const obtenerDatos=()=>{const _0x5458db=_0xe12a;return _0x4d1198[_0x5458db(0xa7)](_0x5458db(0xcb))?JSON['parse'](_0x4d1198[_0x5458db(0x9b)](_0x5458db(0xcb),_0x5458db(0xc4))):{'usuarios':{},'personajesReservados':[]};},guardarDatos=_0x5b645b=>{const _0x4018b7=_0xe12a;_0x4d1198[_0x4018b7(0x96)](_0x4018b7(0xcb),JSON[_0x4018b7(0xa8)](_0x5b645b,null,0x2));},verificarBot=()=>{const _0x4b6d57=_0xe12a;try{const _0x2e1fed=JSON[_0x4b6d57(0xbb)](_0x4d1198[_0x4b6d57(0x9b)](_0x4b6d57(0xb8),'utf-8'));if(_0x2e1fed[_0x4b6d57(0x9c)]!==_0x4b6d57(0xbf))return![];if(_0x2e1fed[_0x4b6d57(0xa1)][_0x4b6d57(0xc6)]!==_0x4b6d57(0xbe))return![];return!![];}catch(_0x346e16){return console[_0x4b6d57(0x9f)](_0x4b6d57(0x9a),_0x346e16),![];}};let handler=async(_0x403786,{conn:_0x12c7f0})=>{const _0x358936=_0xe12a;if(!_0x403786[_0x358936(0xb3)])return;if(!verificarBot()){await _0x12c7f0[_0x358936(0xaa)](_0x403786[_0x358936(0xc9)],_0x358936(0xb7),_0x403786,rcanal);return;}let _0x582f22=_0x403786['sender'],_0x5b1fb6=await _0x12c7f0[_0x358936(0xab)](_0x582f22),_0x21909d=_0x403786[_0x358936(0xb3)][_0x358936(0xd0)]['match'](/<id:(.*)>/)?.[0x1],_0x3afa2a=obtenerDatos();if(!_0x21909d)return;let _0x353171=_0x3afa2a[_0x358936(0xc5)]['find'](_0x6d24cb=>_0x6d24cb['id']===_0x21909d),_0x37dcd0=new Date()['getTime'](),_0x28b528=0xa*0x3c*0x3e8,_0x8312e1=cooldowns[_0x582f22]||0x0;if(_0x37dcd0-_0x8312e1<_0x28b528){let _0x190497=_0x28b528-(_0x37dcd0-_0x8312e1),_0x115190=Math['floor'](_0x190497/0xea60),_0x498471=Math['floor'](_0x190497%0xea60/0x3e8);await _0x12c7f0['reply'](_0x403786[_0x358936(0xc9)],_0x358936(0x99)+_0x115190+_0x358936(0x98)+_0x498471+'\x20segundos*\x20para\x20usar\x20*#c*\x20de\x20nuevo.',_0x403786);return;}if(!_0x353171){_0x12c7f0[_0x358936(0xcc)](_0x403786[_0x358936(0xc9)],_0x358936(0xca),_0x403786,{'mentions':[_0x582f22]});return;}let _0x7e93b6=_0x3afa2a['usuarios'][_0x353171['userId']]?.[_0x358936(0xd1)]?.[_0x358936(0xaf)](_0x41d2e9=>_0x41d2e9[_0x358936(0xc6)]===_0x353171[_0x358936(0xc6)]);if(_0x7e93b6){_0x12c7f0[_0x358936(0xcc)](_0x403786[_0x358936(0xc9)],_0x358936(0x9d)+_0x353171[_0x358936(0x9c)]+_0x358936(0xa9),_0x403786,{'mentions':[_0x582f22]}),cooldowns[_0x582f22]=_0x37dcd0;return;}if(_0x353171[_0x358936(0xa6)]!==_0x582f22){setTimeout(async()=>{const _0x20df98=_0x358936;let _0x4e50e5=Math['random']()<0.5;if(_0x4e50e5){!_0x3afa2a[_0x20df98(0xc8)][_0x582f22]&&(_0x3afa2a[_0x20df98(0xc8)][_0x582f22]={'characters':[],'characterCount':0x0,'totalRwcoins':0x0});_0x3afa2a['usuarios'][_0x582f22][_0x20df98(0xd1)][_0x20df98(0xc0)]({'name':_0x353171['name'],'url':_0x353171['url'],'value':_0x353171[_0x20df98(0xae)]});_0x3afa2a[_0x20df98(0xc8)][_0x353171[_0x20df98(0xa6)]]&&(_0x3afa2a['usuarios'][_0x353171[_0x20df98(0xa6)]][_0x20df98(0xd1)]=_0x3afa2a['usuarios'][_0x353171['userId']][_0x20df98(0xd1)][_0x20df98(0xb4)](_0xad1f20=>_0xad1f20['url']!==_0x353171['url']));_0x3afa2a[_0x20df98(0xc5)]=_0x3afa2a[_0x20df98(0xc5)]['filter'](_0x423721=>_0x423721['id']!==_0x21909d),guardarDatos(_0x3afa2a);let _0x4cb68e=_0x353171[_0x20df98(0xa6)],_0x2f4c65=await _0x12c7f0[_0x20df98(0xab)](_0x4cb68e);await _0x12c7f0[_0x20df98(0xcc)](_0x403786['chat'],_0x20df98(0xa3)+_0x582f22[_0x20df98(0xb5)]('@')[0x0]+_0x20df98(0xc2)+_0x353171[_0x20df98(0x9c)]+'\x20de\x20@'+_0x4cb68e['split']('@')[0x0]+'!',_0x403786,{'mentions':[_0x582f22,_0x4cb68e]});}else{let _0x3bd6a1=_0x353171[_0x20df98(0xa6)],_0x283f19=await _0x12c7f0['getName'](_0x3bd6a1);await _0x12c7f0[_0x20df98(0xcc)](_0x403786[_0x20df98(0xc9)],_0x20df98(0xb2)+_0x353171['name']+_0x20df98(0xb1)+_0x3bd6a1[_0x20df98(0xb5)]('@')[0x0]+'!',_0x403786,{'mentions':[_0x582f22,_0x3bd6a1]});}cooldowns[_0x582f22]=_0x37dcd0;});return;}!_0x3afa2a[_0x358936(0xc8)][_0x582f22]&&(_0x3afa2a[_0x358936(0xc8)][_0x582f22]={'characters':[],'characterCount':0x0,'totalRwcoins':0x0});let _0x31058a=_0x3afa2a[_0x358936(0xc8)][_0x582f22],_0x21d3ec=_0x31058a[_0x358936(0xd1)]?.[_0x358936(0xaf)](_0x168c5f=>_0x168c5f[_0x358936(0xc6)]===_0x353171[_0x358936(0xc6)]);if(_0x21d3ec){_0x12c7f0[_0x358936(0xcc)](_0x403786[_0x358936(0xc9)],'《✧》Ya\x20tienes\x20el\x20personaje\x20'+_0x353171[_0x358936(0x9c)]+'!',_0x403786,{'mentions':[_0x582f22]});return;}_0x31058a['characters'][_0x358936(0xc0)]({'name':_0x353171['name'],'url':_0x353171[_0x358936(0xc6)],'value':_0x353171[_0x358936(0xae)]}),_0x31058a[_0x358936(0xa2)]++,_0x31058a['totalRwcoins']+=_0x353171[_0x358936(0xae)],_0x3afa2a[_0x358936(0xc8)][_0x582f22]=_0x31058a,_0x3afa2a[_0x358936(0xc5)]=_0x3afa2a['personajesReservados']['filter'](_0x18427f=>_0x18427f['id']!==_0x21909d),guardarDatos(_0x3afa2a),_0x12c7f0[_0x358936(0xcc)](_0x403786[_0x358936(0xc9)],_0x358936(0xc3)+_0x353171[_0x358936(0x9c)]+_0x358936(0xad)+_0x582f22[_0x358936(0xb5)]('@')[0x0]+'!*',_0x403786,{'mentions':[_0x582f22]}),cooldowns[_0x582f22]=_0x37dcd0;};handler[_0x4073c9(0xbc)]=['c'],handler[_0x4073c9(0xb6)]=[_0x4073c9(0xc1)],handler[_0x4073c9(0xac)]=['c',_0x4073c9(0x97)],handler[_0x4073c9(0xcf)]=!![];export default handler;
