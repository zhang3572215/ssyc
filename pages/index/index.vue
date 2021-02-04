<template>
	<view class="container">		
		<view class="index-top">
			<view class="search-bar">
				<input type="text" v-model="searchData" class="index-search-input" placeholder="输入关键词" confirm-type="search">
				<view v-bind:class="['btn index-search-btn', searchData!=''?'btn-primary':'']" @click="toSearchResult">搜索</view>
			</view>
			<swiper class="swiper" circular :indicator-dots="indexData.widthFix" :autoplay="true" :interval="indexData.interval" next-margin="60rpx">
				<swiper-item v-for="(item,index) in indexData.swiperData" :key="item.id">
					<view class="swiper-item swiper-bg">
						<view class="swiper-image">
							<!-- <image :src="item.image" mode="aspectFill"></image> -->
							<img :src="item.image">
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="index-menubar">
			<view class="menu-item" v-for="item in indexData.menuList" :key="item.id">
				<view class="menu-icon">
					<image :src="item.icon" mode="aspectFill"></image>
				</view>
				<text>{{item.text}}</text>
			</view>
		</view>
		<view class="index-supplier-group">
			<view class="index-supplier-item">
				<view class="index-supplier-title">
					<text>{{indexItemInfo.itemName}}</text>
					<navigator url="" hover-class="navigator-hover">更多 ></navigator>
				</view>
				<view class="index-supplier-list">
					<view class="index-supplier-item" v-for="item in indexItemInfo.itemList" :key="item.id">
						<image :src="item.pic" mode="aspectFill"></image>
					</view>
				</view>
			</view>
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
			}
		},
		computed: {
			...mapState([
				'indexData',
			])
		},
		mounted() {
			this.asyncBannerInfo()
		},
		methods: {
			toSearchResult(){
				
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
		padding: 20px 0 0;
		background-color: #fff;
	}
	.search-bar {
		width: 100%;
		padding: 0 30rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.index-search-input {
		flex: auto;
		height: 80rpx;
		margin-right: 36rpx;
		font-size: 28rpx;
		color: #333;
		line-height: 80rpx;
		padding: 0 40rpx;
		border-radius: 40rpx;
		border: 1rpx solid #dcdfe6;
		box-sizing: border-box;
	}
	.btn {
		border: none;
		padding: 24rpx;
		color: #fff;
		font-size: 28rpx;
		line-height: 1em;
		background-color: #d3d4d6;
	}
	.btn-primary {
		color: #fff;
		background-color: #409eff;
		border-color: #409eff;
	}
	.index-search-btn {
		flex: 1;
		padding: 24rpx 64rpx;
		border-radius: 38rpx;
	}
	.swiper {
		width: 100%;
		height: 260rpx;
		margin-top: 24rpx;
	}
	swiper-item {
		height: 260rpx;
		margin: 0 auto;
		padding: 0;
		text-align: center;
	}
	.swiper-item {
		height: 260rpx;
		padding: 0 30rpx;
	}
	.swiper-image {
		width: 660rpx;
		height: 260rpx;
		border-radius: 40rpx;
		overflow: hidden;
		background-color: transparent;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.swiper-image image {
		max-width: 100%;
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
		line-height: 100rpx;
		border-radius: 24rpx;
		text-align: center;
		overflow: hidden;
	}
	.menu-icon image {
		width: 100%;
		height: 100%;
	}
	.menu-item text{
		line-height: 1em;
	}
	.index-supplier-group {
		width: 100%;
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
	.index-supplier-title navigator {
		font-size: 0.875em;
		line-height: 1em;
		color: #999;
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
		border: 1px solid #E0E0E0;
	}
</style>
