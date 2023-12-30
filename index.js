function submit() {
    // 获取当前日期和时间
    var currentDate = new Date();
    
    // 指定允许点击的日期（示例日期为2024年1月1日）
    var allowedDate = new Date('2023-01-01');
    
    // 检查当前日期是否在指定日期之后
    if (currentDate >= allowedDate) {
        // 使用Layer插件弹出确认提示框
        layer.confirm('当前应用未授权，请前往授权？', {
            btn: ['确认', '取消'],
            icon: 0, // 指定图标为感叹号，你也可以替换成其他的图标编号
            title: '提示',
            closeBtn: 0
        }, function() {
            // 如果用户点击了确认
            var link = 'https://www.yunbuyun.com/cart?fid=6&gid=12';
            window.location.href = link;
        }, function() {
            // 如果用户点击了取消，可以在这里执行其他操作
        });
    } else {
        // 操作失败提示（如果需要的话）
        // layer.msg('操作失败，请联系Q群758068758了解详情。');
    }
}
