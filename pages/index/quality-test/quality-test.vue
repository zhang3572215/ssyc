<template>
	<view class="quality-test">
		<view class="quality-banner">
			<image src="../../../static/image/index/dynamic/quality-banner.png" mode="aspectFit"></image>
		</view>
		<view class="quality-article-group">
			<view class="article-title">
				<view class="article-cross-line"></view>
				<h2 class="article-title">公司资质</h2>
				<view class="article-cross-line"></view>
			</view>
			<view class="article-body">
				<text>中纺检测（福建）有限公司成立于2007年，总部位于福建省泉州市，是一家拥有雄厚技术力量和先进检测设备的综合性、专业性的检验检测机构，具有中国合格评定国家认可委员会CNAS认可、CMA资质认定证书及农产品质量安全检测机构考核合格证书CATL，认可资质加入了ilac-MRA国际实验室认可合作组织多边承认协议，公司依据ISO/IEC 17025建立实验室管理体系，出具的检验检测报告具有国际公信力。目前承检范围有：食品中常规理化、重金属、农残、兽残、食品添加剂、微生物，以及生活饮用水、一次性卫生用品、茶叶检测，水质检测，饲料检测，食品接触材料检测，化妆品检测，纺织品/服装等众多领域，并开展化学品材料剖析项目，帮助企业分析新材料、原材料鉴别、建议配方等服务。</text>
			</view>
		</view>
		<view class="certificate-group">
			<view class="certificate-item">
				<image src="../../../static/image/index/dynamic/certificate-3.png" mode=""></image>
			</view>
			<view class="certificate-item">
				<image src="../../../static/image/index/dynamic/certificate-2.png" mode=""></image>
			</view>
			<view class="certificate-item">
				<image src="../../../static/image/index/dynamic/certificate-1.png" mode=""></image>
			</view>
		</view>
		<view class="test-content">
			<view class="article-title">
				<view class="article-cross-line"></view>
				<h2 class="article-title">检测内容</h2>
				<view class="article-cross-line"></view>
			</view>
			<view class="content-list">
				<view class="content-item" v-for="item in contentList" :key="item.id">
					<view class="content-item-icon">
						<image :src="item.image" mode="heightFix"></image>
					</view>
					<view class="content-item-text">{{item.text}}</view>
				</view>
			</view>
		</view>
		<view class="test-content">
			<view class="article-title">
				<view class="article-cross-line"></view>
				<h2 class="article-title">检测设备</h2>
				<view class="article-cross-line"></view>
			</view>
			<view class="device-list">
				<view class="device-item" v-for="(item,index) in deviceList" :key="index">
					<view class="device-item-text">
						<view class="device-item-idx">{{index}}</view>
						<view class="device-item-name">{{item.text}}</view>
					</view>
					<view class="device-item-icon">
						<image :src="item.image" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="quality-test-btn">去质检</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapState('qualityData',[
				'contentList',
				'deviceList'
			]),
		},
		methods: {
			
		}
	}
</script>

<style>
	.quality-test {
		padding: 30rpx 30rpx 100rpx 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
		position: relative;
	}
	.quality-banner {
		width: 690rpx;
		height: 300rpx;
		padding: 4rpx 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.quality-banner image {
		min-width: 690rpx;
		min-height: 300rpx;
	}
	.quality-article-group {
		padding: 30rpx 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
	}
	.article-title {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.article-title {
		margin: 0 32rpx;
		font-size: 36rpx;
		font-weight: 400;
		color: #333333;
		line-height: 36rpx;
	}
	.article-cross-line {
		width: 120rpx;
		height: 2rpx;
		background-color: #333;
	}
	.article-body {
		padding: 30rpx 0;
	}
	.article-body text {
		font-size: 24rpx;
		font-weight: 400;
		color: #999999;
		text-indent: 2em;
	}
	.certificate-group {
		padding: 30rpx 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.certificate-item {
		width: 200rpx;
		height: 280rpx;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.certificate-item image {
		max-width: 100%;
		max-height: 100%;
	}
	.content-list {
		padding: 30rpx 0;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
	}
	.content-item {
		min-width: 25%;
		padding: 30rpx 0;
		flex: 33%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	}
	.content-item-icon {
		height: 40rpx;
		margin-bottom: 18rpx;
	}
	.content-item-icon image {
		height: 40rpx;
	}
	.content-item-text {
		font-size: 24rpx;
		font-weight: 400;
		color: #333333;
		line-height: 24rpx;
	}
	.device-list {
		padding: 30rpx 0 0;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
	}
	.device-item {
		flex: 0 0 342rpx;
		width: 342rpx;
		padding-bottom: 30rpx;
	}
	.device-item-text {
		margin-bottom: 30rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.device-item-idx {
		flex: none;
		width: 42rpx;
		height: 42rpx;
		margin-right: 18rpx;
		font-size: 28rpx;
		line-height: 42rpx;
		text-align: center;
		color: #FFFFFF;
		background-color: #09A4FF;
	}
	.device-item-name {
		font-size: 24rpx;
		line-height: 1em;
		color: #333333;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		word-wrap: break-word;
	}
	.device-item-icon {
		width: 100%;
		height: 256rpx;
		overflow: hidden;
	}
	.device-item-icon image {
		max-width: 100%;
		max-height: 100%;
	}
	.quality-test-btn {
		width: 100%;
		height: 100rpx;
		font-size: 34rpx;
		line-height: 100rpx;
		text-align: center;
		font-weight: normal;
		color: #FFFFFF;
		background: #09A4FF;
		position: fixed;
		bottom: 0;
		left: 0;
	}
</style>
