//======================================================
// 算24 C4 1.02
// 整理代码，去掉一些多余冗杂的地方
// 2018年4月23日 完成
// 2019年3月2日修改
//======================================================

//======================================================
// C2类，用于判断两个数通过加减乘除运算能否得到某个结果
// C代表Caculate，2代表两个操作数
// op1:操作数1,op2:操作数2,result,结果
//======================================================
function C2(op1,op2,result){
	var obj=new Object();
	obj.op1=op1;
	obj.op2=op2;
	obj.result=result;

	obj.findComputeMethods=function(){
		var micro=0.000001 // 定义一个极小量，运算结果绝对值小于它就算相等

		var arr=[];

		// op1+op2
		if(Math.abs(result-(op1+op2))<micro){
			arr.push(op1+"+"+op2);	
		}
		
		// op1*op2
		if(Math.abs(result-op1*op2)<micro){
			arr.push(op1+"*"+op2);	
		}
		
		// op1-op2
		if(Math.abs(result-(op1-op2))<micro){
			arr.push(op1+"-"+op2);	
		}
		
		// op2-op1
		if(Math.abs(result-(op2-op1))<micro){
			arr.push(op2+"-"+op1);	
		}
		
		// op1/op2
		if(Math.abs(result-op1/op2)<micro){
			arr.push(op1+"/"+op2);	
		}
		
		// op2/op1
		if(Math.abs(result-op2/op1)<micro){
			arr.push(op2+"/"+op1);	
		}

		return arr;
	}

	return obj;
}

//======================================================
// C3类，用于判断三个数通过加减乘除运算能否得到某个结果
// C代表Caculate，3代表三个操作数
// op1:操作数1,op2:操作数2,op3:操作数3,result,结果
//======================================================
function C3(op1,op2,op3,result){
	var obj=new Object();
	obj.op1=op1;
	obj.op2=op2;
	obj.op3=op3;
	obj.result=result;

	obj.findComputeMethods=function(){
		var retArr=[];// 最终返回数组

		// 排列数组，三个操作数共有6种排列方式
		var permutationArr=[ 
							[this.op1,this.op2,this.op3],
							[this.op1,this.op3,this.op2],
							[this.op2,this.op1,this.op3],
							[this.op2,this.op3,this.op1],
							[this.op3,this.op2,this.op1],
							[this.op3,this.op1,this.op2], 
						   ]; 

		for(var i=0;i<permutationArr.length;i++){
			var arr=permutationArr[i];
			var op1=arr[0];
			var op2=arr[1];
			var op3=arr[2];

			// [op1,op2]-op3
			var c2=new C2(op1,op2,this.result+op3);
			var methods=c2.findComputeMethods();
			for(var j=0;j<methods.length;j++){
				retArr.push('('+methods[j]+")"+"-"+op3);
			}

			// [op1,op2]/op3
			c2=new C2(op1,op2,this.result*op3);
			methods=c2.findComputeMethods();
			for(var j=0;j<methods.length;j++){
				retArr.push('('+methods[j]+")"+"/"+op3);
			}

			// [op1,op2]+op3
			c2=new C2(op1,op2,this.result-op3);
			methods=c2.findComputeMethods();
			for(var j=0;j<methods.length;j++){
				retArr.push('('+methods[j]+")"+"+"+op3);
			}

			// op3-[op1,op2]
			c2=new C2(op1,op2,op3-this.result);
			methods=c2.findComputeMethods();
			for(var j=0;j<methods.length;j++){
				retArr.push(op3+"-"+'('+methods[j]+")");
			}

			// [op1,op2]*op3
			c2=new C2(op1,op2,this.result/op3);
			methods=c2.findComputeMethods();
			for(var j=0;j<methods.length;j++){
				retArr.push('('+methods[j]+")"+"*"+op3);
			}

			// op3/[op1,op2]
			c2=new C2(op1,op2,op3/this.result);
			methods=c2.findComputeMethods();
			for(var j=0;j<methods.length;j++){
				retArr.push(op3+"/"+'('+methods[j]+")");
			}
		}

		return retArr;
	};

	return obj;
}

//======================================================
// C4类，用于判断三个数通过加减乘除运算能否得到某个结果
// C代表Caculate，4代表两个操作数
// op1:操作数1,op2:操作数2,op3:操作数3,op4:操作数4,result,结果
//======================================================
function C4(op1,op2,op3,op4,result){
	var obj=new Object();
	obj.op1=op1;
	obj.op2=op2;
	obj.op3=op3;
	obj.op4=op4;
	obj.result=result;

	obj.findComputeMethods=function(){
		var retArr=[];// 返回数组

		var permutationArr=[	[this.op1,this.op2,this.op3,this.op4],
							 [this.op1,this.op2,this.op4,this.op3],
							 [this.op1,this.op3,this.op2,this.op4],
							 [this.op1,this.op3,this.op4,this.op2],
							 [this.op1,this.op4,this.op2,this.op3],
							 [this.op1,this.op4,this.op3,this.op2], 
								[this.op2,this.op1,this.op3,this.op4],
							 [this.op2,this.op1,this.op4,this.op3],
							 [this.op2,this.op3,this.op1,this.op4],
							 [this.op2,this.op3,this.op4,this.op1],
							 [this.op2,this.op4,this.op1,this.op3],
							 [this.op2,this.op4,this.op3,this.op1], 
								[this.op3,this.op1,this.op2,this.op4],
							 [this.op3,this.op1,this.op4,this.op2],
							 [this.op3,this.op2,this.op1,this.op4],
							 [this.op3,this.op2,this.op4,this.op1],
							 [this.op3,this.op4,this.op1,this.op2],
							 [this.op3,this.op4,this.op2,this.op1], 
								[this.op4,this.op1,this.op2,this.op3],
							 [this.op4,this.op1,this.op3,this.op2],
							 [this.op4,this.op2,this.op1,this.op3],
							 [this.op4,this.op2,this.op3,this.op1],
							 [this.op4,this.op3,this.op1,this.op2],
							 [this.op4,this.op3,this.op2,this.op1], 
			               ]; // 全排列数组，四个操作数共有24种排列方式

		for(var i=0;i<permutationArr.length;i++){
			var arr=permutationArr[i];
			
			var op1=arr[0];
			var op2=arr[1];
			var op3=arr[2];
			var op4=arr[3];			

			// [op1,op2,op3]-op4
			var c3=new C3(op1,op2,op3,this.result+op4);
			var methods=c3.findComputeMethods();
			for(var j=0;j<methods.length;j++){
				retArr.push('('+methods[j]+")"+"-"+op4);
			}

			// [op1,op2,op3]/op4
			var c3=new C3(op1,op2,op3,this.result*op4);
			var methods=c3.findComputeMethods();
			for(var j=0;j<methods.length;j++){
				retArr.push('('+methods[j]+")"+"/"+op4);
			}

			// [op1,op2,op3]+op4
			var c3=new C3(op1,op2,op3,this.result-op4);
			var methods=c3.findComputeMethods();
			for(var j=0;j<methods.length;j++){
				retArr.push('('+methods[j]+")"+"+"+op4);
			}

			// op4-[op1,op2,op3]
			var c3=new C3(op1,op2,op3,op4-this.result);
			var methods=c3.findComputeMethods();
			for(var j=0;j<methods.length;j++){
				retArr.push(op4+"-"+'('+methods[j]+")");
			}

			// [op1,op2,op3]*op4
			var c3=new C3(op1,op2,op3,this.result/op4);
			var methods=c3.findComputeMethods();
			for(var j=0;j<methods.length;j++){
				retArr.push('('+methods[j]+")"+"*"+op4);
			}

			// op4/[op1,op2,op3]
			var c3=new C3(op1,op2,op3,op4/this.result);
			var methods=c3.findComputeMethods();
			for(var j=0;j<methods.length;j++){
				retArr.push(op4+"/"+'('+methods[j]+")");
			}

			// 以下为C4中特有的先成对组合再看运算结果的六种情况
			// op1*op2-op3*op4
			if(op1*op2-op3*op4==result){
				retArr.push(op1+"*"+op2+"-"+op3+"*"+op4);
			}

			// op1*op2+op3*op4
			if(op1*op2+op3*op4==result){
				retArr.push(op1+"*"+op2+"+"+op3+"*"+op4);
			}

			// op1/op2-op3/op4
			if(op1/op2-op3/op4==result){
				retArr.push(op1+"/"+op2+"-"+op3+"/"+op4);
			}

			// op1/op2+op3/op4
			if(op1/op2+op3/op4==result){
				retArr.push(op1+"/"+op2+"+"+op3+"/"+op4);
			}
	
			// op1*op2-op3/op4
			if(op1*op2-op3/op4==result){
				retArr.push(op1+"*"+op2+"-"+op3+"/"+op4);
			}

			// op1*op2+op3/op4
			if(op1*op2+op3/op4==result){
				retArr.push(op1+"*"+op2+"+"+op3+"/"+op4);
			}
		}

		return retArr;
	}

	return obj;
}

//======================================================
// 用来得到仅包含不重复元素的数组
// arr:传入的数组
//======================================================
function getDistinctArray(arr){
    var returnArr=new Array();

    var sortedArr=arr.sort();
    for(var i=0;i<sortedArr.length;i++){
        if(returnArr[returnArr.length-1]!=sortedArr[i]){
            returnArr.push(sortedArr[i]);
        }
    }

    return returnArr;
}

//======================================================
// 程序入口
//======================================================
function main(){
	var RESULT=24 // 定义24这个结果

	process.stdin.resume();    
    process.stdout.write("\033[33m 请输入四个数字，用逗号分隔: \033[39m");// 草黄色
    process.stdin.setEncoding('utf8');
    
    process.stdin.on('data',function(text){
        var input=text.trim();
        process.stdin.end();// 退出输入状态  

		var arrTemp=input.split(",");
		var op1=parseInt(arrTemp[0],10);
		var op2=parseInt(arrTemp[1],10);
		var op3=parseInt(arrTemp[2],10);
		var op4=parseInt(arrTemp[3],10);

		var c4=new C4(op1,op2,op3,op4,RESULT);
		var arr=getDistinctArray(c4.findComputeMethods());

		if(arr.length>0){
			for(var i=0;i<arr.length;i++){
				console.log(arr[i]+"="+RESULT);	
			}
		}else{
			console.log(input+"这四个数无法计算得到24");
		}
	});
}

// 开始
main();