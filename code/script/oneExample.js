/**
 * Created by yangyang on 17/1/4.
 */

/**
 * 第一个例子
 */

//错误示例1
//let funPromise = function (time) {
//    return new Promise(function (resolve, reject) {
//        //Pending 进行中
//        setTimeout(function () {
//            resolve(); // Resolved（已完成，又称 Fulfilled）
//        }, time);
//    })
//};
//
//let funAsync = async function () {
//    let numArr = [1000, 2000, 3000];
//    numArr.forEach(function(value, index){
//        await funPromise(value);
//    })
//}
//
//funAsync();

//错误示例2
//let funPromise = function (time) {
//    return new Promise(function (resolve, reject) {
//        //Pending 进行中
//        setTimeout(function () {
//            resolve(time + ' : ' + new Date()); ; // Resolved（已完成，又称 Fulfilled）
//        }, time);
//    })
//};
//
//let funAsync = async function () {
//    let numArr = [1003, 1002, 1001];
//    numArr.forEach(async function(value, index){
//        let result = await funPromise(value);
//        console.log(result);
//    })
//}
//
//funAsync();

//正确示范
//let funPromise = function (time) {
//    return new Promise(function (resolve, reject) {
//        //Pending 进行中
//        setTimeout(function () {
//            // Resolved（已完成，又称 Fulfilled）
//            resolve(time + ' : ' + new Date());
//        }, time);
//    })
//};
//
//let funAsync = async function () {
//    let numArr = [1003, 1002, 1001];
//    // 三个funPromise()操作将是继发执行
//    for (let value of numArr){
//        let result = await funPromise(value);
//        console.log(result);
//    }
//}
//
//funAsync();



/**
 * 第二个例子
 */
//let funPromise = function (time) {
//    return new Promise(function (resolve, reject) {
//        //Pending 进行中
//        setTimeout(function () {
//            resolve(); // Resolved（已完成，又称 Fulfilled）
//        }, time);
//    })
//};
//
//let funAsync = async function () {
//    // 在这里使用起来就像同步代码那样直观
//    console.log('start:  ' + new Date());
//    await funPromise(3000);
//    console.log('end:  '  + new Date());
//};
//
//funAsync();

/**
 * 第三个例子
 */
//let funPromise = function (time) {
//    return new Promise(function (resolve, reject) {
//        //Pending 进行中
//        setTimeout(function () {
//            resolve(); // Resolved（已完成，又称 Fulfilled）
//        }, time);
//    })
//};

//let funAsync_1 = async function () {
//    console.log('funAsync_1_start:  ' + new Date());
//    await funPromise(3000);
//    console.log('funAsync_1_end:  '  + new Date());
//};
//
//let funAsync_2 = async function () {
//    console.log('funAsync_2_start:  ' + new Date());
//    //等待 funAsync_1() 中的 Promise 运行结束
//    await funAsync_1();
//    console.log('funAsync_2_end:  '  + new Date());
//};
//
//funAsync_2();



// 注意： await 命令后面的 Promise 对象，运行结果可能是 rejected，
// 所以最好把 await 命令放在 try...catch 代码块中。
//try {
//    await funAsync_1();
//} catch (err) {
//    console.log(err);
//}

/**
 * 注意点
 */
let funPromise = function (time) {
    return new Promise(function (resolve, reject) {
        //Pending 进行中
        setTimeout(function () {
            reject('我是返回的错误'); // 从 pending 变为 rejected
        }, time);
    })
};

let funAsync = async function () {
    console.log('start:  ' + new Date());
    try {
        await funPromise(3000);
        console.log('我不会执行的噢');
    }  catch (err) {
        console.log(err);
    }
    console.log('end:  '  + new Date());
};

funAsync();
