/**
 * Created by yangyang on 17/1/12.
 */

/**
 * 为什么要用 try...catch...
 */
//async function funcAsync(){
//    console.log('\n---begin---\n');
//    await ih_func();
//    console.log('------end-----');
//}
//
//function ih_func(){
//    return new Promise(function (resolve, reject) {
//        //这里相当于throw一个异常了
//        reject('error');
//    });
//}
//
//funcAsync();

/**
 *  如何使用 try...catch... 处理异常
 */
//async function funcAsync(){
//    console.log('\n---begin---\n');
//    try{
//        await ih_func();
//    } catch(e){
//        console.log(e);
//    }
//    console.log('------end-----');
//}
//
//function ih_func(){
//    return new Promise(function (resolve, reject) {
//        //这里相当于throw一个异常了
//        reject('error');
//    });
//}
//
//funcAsync();

/**
 *  程序如何处理异常
 */
//async function funcAsync(){
//    for(let i=0; i<3; i++){
//        try{
//            console.log('\n---begin---\n');
//            await ih_func();
//            console.log('------end-----');
//        } catch(e){
//            console.log(e);
//        }
//        console.log('-----end2-----');
//    }
//}
//
//function ih_func(){
//    return new Promise(function (resolve, reject) {
//        //这里相当于throw一个异常了
//        reject('error');
//    });
//}
//
//funcAsync();

/**
 *  如何提高程序的健壮性
 */
async function funcAsync(){
    for(let i=0; i<3; i++){
        console.log('\n---begin'+ i +'---\n');
        try{
            await ih_func(i);
        } catch(e){
            console.log(e);
        }
        console.log('------end'+ i +'-----');
    }
}

function ih_func(args){
    return new Promise(function (resolve, reject) {
        //这里相当于throw一个异常了
        reject('error' + args);
    });
}

funcAsync();