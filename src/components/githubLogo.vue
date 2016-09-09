<template>
	<div class="github">
		<div class="github-left-ear"></div>
		<div class="github-right-ear"></div>
		<div class="github-con"></div>
		<div class="github-row"></div>
		<div class="github-bottom"></div>
		<div class="github-bottom-left"></div>
		<div class="github-bottom-right"></div>
		<div class="github-tail-right-bottom"></div>
		<div class="github-tail-right-top"></div>
		<div class="github-tail-left-top"></div>
		<div class="github-tail-left-bottom"></div>
		<div class="point point1"></div>
		<div class="point point2"></div>
		<div class="point point3"></div>
		<div class="point point4"></div>
		<div class="point point5"></div>
		<div class="point point6"></div>
		<div class="point point7"></div>
	</div>
</template>
<script type="text/javascript">
export default {
    name: 'component_name',
    data() {
        return {};
    }
};
</script>
<style lang="css" scoped>
* {margin: 0;padding: 0;}
.github {width: 340px;height: 340px;border-radius: 50%;background: #000;position: relative;margin: 50px auto;}
.github-left-ear {width: 70px;height: 35px;background: #fff;position: absolute;left: 70px;top: 69px;
	border-top-left-radius: 8px 20px;
	border-top-right-radius: 94px 40px;
	border-bottom-right-radius: 22px 14px;
	border-bottom-left-radius: 8px 30px;
}
.github-right-ear {width: 70px;height: 35px;background: #fff;position: absolute;left: 204px;top: 69px;
	border-top-right-radius: 8px 20px;
	border-top-left-radius: 94px 40px;
	border-bottom-left-radius: 22px 14px;
	border-bottom-right-radius: 8px 30px;
}
.github-con {
	width: 215px;height: 163px;background: #fff;
	position: absolute;left: 64px;top: 62px;
	border-top-right-radius: 100px 75px;
	border-top-left-radius: 100px 75px;
	border-bottom-left-radius: 100px 75px;
	border-bottom-right-radius: 100px 75px;
}
.github-bottom {
	width: 112px;height: 140px;background: #fff;
	position: absolute;left: 116px;top: 210px;
	border-top-right-radius: 70px 90px;
	border-top-left-radius: 70px 90px;
}
.github-row {width: 124px;height: 16px;background: #fff;position: absolute;bottom: 0px;left: 108px;
	
}
.github-bottom-left {
	width: 9px;height: 16px;background: #000;position: absolute;
	border-top-right-radius: 0 10px;
	border-top-left-radius: 0 10px;
	border-bottom-left-radius: 6px 6px;
	border-bottom-right-radius: 6px 6px;
	left: 107px;bottom: 11px;
}
.github-bottom-right {
	width: 8px;height: 12px;background: #000;position: absolute;
	border-top-right-radius: 0 10px;
	border-top-left-radius: 0 10px;
	border-bottom-left-radius: 6px 3px;
	border-bottom-right-radius: 6px 3px;
	left: 228px;bottom: 12px;
}
.github-tail-right-bottom {
	width: 58px;height: 50px;background: #fff;position: absolute;left:68px;top: 238px;
	border-bottom-right-radius: 35px 25px;
	border-bottom-left-radius: 40px 20px;
	border-top-right-radius: 40px 20px;
	transform: rotate(3deg);
}
.github-tail-right-top {
	width: 58px;height: 37px;background: #000;position: absolute;left:63px;top: 233px;
	border-bottom-right-radius: 40px 20px;
	border-bottom-left-radius: 40px 25px;
	transform: rotate(18deg);
}
.github-tail-left-top {
	position: absolute;left: 39px;top: 244px;width: 30px;height: 28px;background: #fff;
	border-top-right-radius: 35px 29px;
	border-top-left-radius: 15px 10px;
	border-bottom-left-radius: 40px 20px;
}	
.github-tail-left-bottom {
	position: absolute;left: 32px;top: 255px;width: 37px;height: 20px;background: #000;
	border-top-right-radius: 35px 35px;
	border-top-left-radius: 15px 10px;
	border-bottom-left-radius: 10px 20px;
	transform: rotate(20deg);
}
.point {
	position: absolute;
	background: #000;
	border-radius: 50%;
}
.point1 {
	width: 5px;
	height: 3px;
	left:48px;
	top: 247px;
}
.point2 {
	width: 5px;
	height: 4px;
	left:56px;
	top: 252px;
}
.point3 {
	width: 5px;
	height: 5px;
	left:63px;
	top: 259px;
}
.point4 {
	width: 6px;
	height:5px;
	left:70px;
	top: 266px;
}
.point5 {
	width: 6px;
	height: 5px;
	left:80px;
	top: 273px;
}
.point6 {
	width: 7px;
	height: 5px;
	left:92px;
	top: 275px;
}
.point7 {
	width: 8px;
	height: 6px;
	left:103px;
	top: 274px;
}
</style>
