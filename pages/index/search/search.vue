<template>
	<veiw class="search">
		<view class="container">
			<uni-search-bar :radius="100" @confirm="search"cancelButton="auto"></uni-search-bar>
			<view class="history">
				<view class="history-title">搜索历史</view>
				<view class="history-list">
					<view class="history-item" v-for="(item,index) in listArr" :key="index">{{item}}</view>
				</view>
			</view>
		</view>		
	</veiw>
</template>

<script>
	export default {
		data() {
			return {
				listArr:['苹果','菠萝','水果','随便搜搜']
			}
		},
		mounted() {
			let that = this;
			uni.getStorage({
				key: 'SEARCH_RESULT',
				success: res => {
					console.log(res.data)
					if (res.data) {
						let str = JSON.parse(res.data)
						console.log(str);
						that.listArr = str
					}
				}
			})
		},
		methods: {
			search(e){
				let that = this
				console.log(e.value)
				if (that.listArr.length > 7) {
					that.listArr.pop()
					that.listArr.unshift(e.value)
					uni.setStorage({
						key: 'SEARCH_RESULT',
						data: JSON.stringify(that.listArr),
						success: res => {
							uni.navigateTo({
								url: '../../hall/hall'
							})
						}
					})
				}else {
					that.listArr.push(e.value)
					uni.setStorage({
						key: 'SEARCH_RESULT',
						data: JSON.stringify(that.listArr),
						success: res => {
							uni.navigateTo({
								url: '../../hall/hall'
							})
						}
					})
				}
			}
		}
	}
</script>

<style>
	.container {
		background-color: #F7F7F7;
	}
	.history {
		margin-top: 10rpx;
		padding: 0 30rpx;
		background-color: #fff;
	}
	.history-title {
		padding: 30rpx 0;		
		font-size: 28rpx;
		font-weight: normal;
		color: #333333;
		border-bottom: 2rpx solid #ddd;
	}
	.history-list {
		padding: 30rpx 0;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.history-item {
		width: 50%;
		padding-bottom: 30rpx;
		font-size: 24rpx;
		font-weight: normal;
		color: #333333;
	}
</style>
