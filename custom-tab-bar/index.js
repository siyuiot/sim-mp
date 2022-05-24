Component({
	data: {
		active: 0,
		list: [
			{
				icon: 'wap-home',
				text: '首页',
				url: '/pages/index/index'
			},
			{
				icon: 'manager',
				text: '我的',
				url: '/pages/home/home'
			},
			{
				icon: 'location',
				text: '帮助',
				url: '/pages/zf/zf'
			}
		]
	},

	methods: {
		onChange(event) {
			this.setData({ active: event.detail });
			wx.switchTab({
				url: this.data.list[event.detail].url
			});
		},

		init() {
			const page = getCurrentPages().pop();
			this.setData({
				active: this.data.list.findIndex(item => item.url === `/${page.route}`)
			});
		}
	}
});
