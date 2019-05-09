/*
* @Author: gloomyline
* @Date:   2019-05-09 14:33:20
* @Last Modified by:   gloomyline
* @Last Modified time: 2019-05-09 14:36:48
*/
const fs = require('fs');
const path = require('path');
const Mock = require('mockjs');

/**
 * 读取相对于mock目录下的文件
 * @param filePath 文件名称，即是相对于mock的路径
 * @returns {any}
 */
function getJsonFile(filePath) {
    const json = fs.readFileSync(path.resolve(__dirname, '/data', filePath), 'utf-8');
    return JSON.parse(json);
}

module.exports = exports = app => {
	app.get('/mock/user-info', (req, res) => {
		const json = getJsonFile('userInfo.json')
		res.json(Mock.mock(json))
	})
}