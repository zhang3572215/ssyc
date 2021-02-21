<template>
	<view class="container">		
		<view class="index-top">
			<!-- <view class="search-bar">
				<input type="text" v-model="searchData" class="index-search-input" placeholder="输入关键词" confirm-type="search">
				<view v-bind:class="['btn index-search-btn', searchData!=''?'btn-primary':'']" @click="toSearchResult">搜索</view>
			</view> -->
			<uni-search-bar radius="100" placeholder="输入搜索关键字" @confirm="toSearchResult" cancelButton="none" @blur="toSearchResult"/>
		</view>
		<swiper class="swiper" 
			circular
			:indicator-dots="false"
			:autoplay="true"
			:interval="interval"
			next-margin="60rpx">
			<swiper-item v-for="(item,index) in swiperData" :key="item.id">
				<view class="swiper-item swiper-bg">
					<view class="swiper-image">
						<image :src="item.image" mode="aspectFill"></image>
						<!-- <img :src="item.image"> -->
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="index-menubar">
			<view class="menu-item" v-for="item in menuList" :key="item.id" @click="navaByUrl(item.url)">
				<view class="menu-icon">
					<image :src="item.icon" mode="aspectFill"></image>
				</view>
				<text>{{item.text}}</text>
			</view>
		</view>
		<view class="index-supplier-group">
			<view class="index-supplier-title">
				<text>优质供应商</text>
				<navigator url="/pages/index/supplier-list/supplier-list" hover-class="navigator-hover">更多</navigator>
			</view>
			<view class="index-supplier-list">
				<view class="index-supplier-item" v-for="item in itemList" :key="item.id" >
					<image :src="item.pic" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<view class="product-group">
			<view class="product-control">
				<view 
				v-for="item in purchaseType"
				:key="item.id"
				:class="{'product-control-item': true, 'product-item-active': item.id == productAcitveId}" 
				@click="productAcitveId = item.id">{{item.type}}</view>
			</view>
			<swiper class="pro-swiper"
				:style="{height:computeHeigh}"
				:circular="false"
				:indicator-dots="false"
				:autoplay="false"
				:current="productAcitveId"
				:duration="500"
				@change="proSwiperChang">
				<swiper-item>
					<view class="product-item" v-for="item in productList" :key="item.pid">
						<view class="pro-item-info">
							<view class="pro-item-pic">
								<image :src="item.pic" mode="aspectFill"></image>
							</view>
							<view class="pro-item-text">
								<view class="pro-text-row">
									<view class="pro-row-title">{{item.name}}</view>										
								</view>
								<view class="pro-text-row">
									<view class="attrs">供应商：{{item.supplier}}</view>
									<view class="attrs">发起采购商：{{item.sponsor}}</view>
								</view>
								<view class="pro-text-row">
									<view class="pro-text-score">{{item.score | indexScoreFillter}}</view>
									<view class="pro-score-icon" v-for="pitem in 5" :key="pitem">
										<image :src="pitem < item.score?startLight:startGray" mode="aspectFit"></image>
									</view>
								</view>
								<view class="pro-item-link">详情</view>
							</view>
						</view>
						<view class="pro-item-last">{{item.lastTime}}</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="product-list">
						2
					</view>
				</swiper-item>
				<swiper-item>
					<view class="product-list">
						3
					</view>
				</swiper-item>
				<swiper-item>
					<view class="product-list">
						4
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	const app = getApp()
	export default {
		data() {
			return {
				searchData: '',
				productAcitveId: 0
			}
		},
		computed: {
			...mapState([
				'startLight',
				'startGray'
			]),
			...mapState('indexData',[
				'interval',
				'swiperData',
				'menuList',
				'itemList',
				'purchaseType',
				'productList'
			]),
			computeHeigh:function(){
				return this.productList.length > 0?260*this.productList.length+'rpx':0
			}
		},
		filters:{
			indexScoreFillter:function(num){
				if (num > 0) {
					return num.toFixed(1)
				}
			}
		},
		mounted() {
			this.asyncBannerInfo()
		},
		methods: {
			toSearchResult(){
				uni.navigateTo({
					url: 'search/search'
				})
			},
			proSwiperChang(e){
				this.productAcitveId = e.detail.current
			},
			navaByUrl(url) {
				console.log('跳转')
				uni.navigateTo({
					url:url,
				})
			},			
			...mapActions('indexData',[
				"asyncBannerInfo"
			])
		}
	}
</script>

<style>
	.container {
		padding: 0;
		font-size: 14px;
		line-height: 24px;
		background-color: #F4F5F6;
	}
	.index-top {
		padding: 15rpx 30rpx;
		background-color: #fff;
	}
	.search-bar {
		width: 100%;
		padding: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.index-search-input {
		flex: 1 none;
		width: 510rpx;
		height: 60rpx;
		font-size: 28rpx;
		color: #333;
		line-height: 60rpx;
		padding: 0 30rpx;
		border-radius: 30rpx;
		border: 1rpx solid #dcdfe6;
		box-sizing: border-box;
	}
	.btn {
		border: none;
		color: #fff;
		font-size: 28rpx;
		line-height: 60rpx;
		text-align: center;
		background-color: #d3d4d6;
	}
	.btn-primary {
		color: #fff;
		background-color: #09A4FF;
		border-color: #09A4FF;
	}
	.index-search-btn {
		width: 150rpx;
		height: 60rpx;
		flex: 1 0 none;
		border-radius: 38rpx;
	}
	.swiper {
		width: 100%;
		height: 260rpx;
		padding: 10rpx 30rpx;
		background-color: #fff;
	}
	swiper-item {
		height: 260rpx;
		margin: 0 auto;
		padding: 0;
		text-align: center;
	}
	.swiper-item {
		width: 100%;
		height: 260rpx;
		padding: 0;
		overflow: hidden;
	}
	.swiper-image {
		width: 660rpx;		
		border-radius: 40rpx;
		overflow: hidden;
		background-color: transparent;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.swiper-image image {
		width: 660rpx;	
		height: 260rpx;
	}
	.uni-bg-red {
		background-color: red;
	}
	.uni-bg-green {
		background-color: green;
	}
	.index-menubar {
		margin-bottom: 10rpx;
		padding: 48rpx 30rpx 28rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
	}
	.menu-item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.menu-icon {
		width: 100rpx;
		height: 100rpx;
		margin-bottom: 30rpx;
		border-radius: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	.menu-item:nth-child(1) .menu-icon {
		background: linear-gradient(45deg, #5BDAC7 0%, #A3FFDF 100%);
	}
	.menu-item:nth-child(2) .menu-icon {
		background: linear-gradient(45deg, #8C8FF2 0%, #B0C4FF 100%);
	}
	.menu-item:nth-child(3) .menu-icon {
		background: linear-gradient(45deg, #68BAF9 0%, #81E2FE 100%);
	}
	.menu-icon image {
		max-width: 60rpx;
		max-height: 60rpx;
	}
	.menu-item text{
		line-height: 1em;
	}
	.index-supplier-group {
		width: 100%;
		margin-bottom: 10rpx;
		padding: 0 30rpx;
		background-color: #fff;
	}
	.index-supplier-title {
		width: 100%;
		padding: 30rpx 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.index-supplier-title text {
		font-size: 1.125em;
		line-height: 1em;
		color: #333;
		font-weight: 700;
	}
	.arr-right-link {
		font-size: 28rpx;
		line-height: 28rpx;
		color: #A3A3A3;
	}
	.arr-right-link::after {
		content: '\003E';
		margin-left: 4rpx;
		font-size: 1em;
		line-height: 1em;
	} 
	.index-supplier-list {
		padding-bottom: 30rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.index-supplier-item {
		width: 160rpx;
		height: 160rpx;
		margin-right: 16rpx;
		padding: 8rpx;
		border-radius: 10rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 1px solid #dddddd;
	}
	.index-supplier-item:last-child {
		margin-right: 0;
	}
	.index-supplier-item image {
		max-width: 100%;
		max-height: 100%;		
	}
	.product-group {
		width: 100%;
		background-color: #fff;
	}
	.product-control {
		padding: 0 30rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.product-control-item {
		padding: 28rpx 0;
		font-size: 28rpx;
		color: #999;
		line-height: 28rpx;
	}
	.product-item-active {
		padding-bottom: 24rpx;
		border-bottom: #09A4FF 4rpx solid;
	}
	.product-item-active {
		color: #007FC9;
	}
	.pro-swiper {
		max-width: 750rpx;
		min-height: 260rpx;
	}
	.product-list {
		padding: 0;
	}
	.product-item {
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
		border-bottom: 1rpx solid #ddd;
	}
	.pro-item-info {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: stretch;
	}
	.pro-item-pic {
		flex: none;
		width: 140rpx;
		height: 140rpx;
		margin-right: 32rpx;
		overflow: hidden;
	}
	.pro-item-pic image {
		max-width: 140rpx;
		max-height: 140rpx;
	}
	.pro-item-text {
		flex: auto;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		position: relative;
	}
	.pro-text-row {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.pro-text-row + .pro-text-row  {
		margin-top: 20rpx;
	}
	.pro-row-title {		
		max-width: 500rpx;
		font-size: 28rpx;
		font-weight: 400;
		color: #333333;
		line-height: 28rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		word-wrap: break-word;
	}
	.pro-text-row .attrs {
		font-size: 24rpx;
		font-weight: 400;
		color: #999999;
		line-height: 24rpx;
	}
	.pro-text-row .attrs + .attrs {
		margin-left: 32rpx;
	}
	.pro-text-score {
		margin-right: 20rpx;
		font-size: 28rpx;
		font-weight: 400;
		color: #333333;
		line-height: 28rpx;
	}
	.pro-item-link {
		font-size: 24rpx;
		font-weight: 400;
		color: #09A4FF;
		line-height: 24rpx;
		bottom: 30rpx;
		right: 0;
		position: absolute;
	}
	.pro-text-row {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.pro-score-icon {
		width: 28rpx;
		height: 28rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.pro-score-icon + .pro-score-icon {
		margin-left: 16rpx;
	}
	.pro-score-icon image {
		width: 28rpx;
		height: 28rpx;
	}
	.pro-item-last {
		margin-top: 32rpx;
		font-size: 28rpx;
		font-weight: 400;
		color: #FFA412;
		text-align: left;
		line-height: 28rpx;
	}
</style>
