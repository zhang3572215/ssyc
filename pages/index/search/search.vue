<template>
	<veiw class="search">
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-icon="scan" @clickLeft="showCity" @clickRight="scan">
			<block slot="left">
				<view class="city">
					<view><text class="uni-nav-bar-text">{{ city }}</text></view>
					<uni-icons type="arrowdown" color="#333333" size="22" />
				</view>
			</block>
			<view class="input-view">
				<uni-icons class="input-uni-icon" type="search" size="22" color="#666666" />
				<input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词" @confirm="confirm">
			</view>
		</uni-nav-bar>
	</veiw>
</template>

<script>
</script>

<style>
</style>
