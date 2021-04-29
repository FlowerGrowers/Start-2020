/**
 *  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `protocol_id` int(11) NOT NULL,
  `appear_in_success` tinyint(1) NOT NULL DEFAULT '1' COMMENT '1表示成功，2表示失败,3表示成功和失败共有',
  `position` enum('HEADER','BODY') DEFAULT NULL,
  `variable_type` enum('REQUEST_ID','PROTOCOL_VERSION','STATUS_CODE','COOKIE','SUCCESS','ERROR_CODE','SUB_ERROR_CODE','ERROR_MESSAGE','DATA','SESSION_ID','CUSTOM','ERROR_RESPONSE') DEFAULT NULL COMMENT '变量的用途和含义，比如成功标志位',
  `symbol_name` varchar(100) DEFAULT '' COMMENT '变量名称，例如success。支持变量，例：{api name}_response',
  `sample_value` varchar(255) DEFAULT NULL COMMENT '示例值，例如true',
  `description` varchar(255) DEFAULT NULL COMMENT 'caption的详细解释，例如：hmac签名值',
  `data_type` enum('STRING','INT','BOOL','DOUBLE','STRUCT','ENUM') NOT NULL DEFAULT 'STRING',
  `left_value` int(11) NOT NULL COMMENT '若返回值在body中，则以树的形式存储返回值',
  `right_value` int(11) NOT NULL,
  `depth` int(11) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `response_variable_ibfk_1` (`protocol_id`),
  CONSTRAINT `response_variable_ibfk_1` FOREIGN KEY (`protocol_id`) REFERENCES `protocol` (`id`)
) 
 *
 *
 */

const a = function test(name: string, text: string) { //
  const list = text.split(',');
  // step_one 筛选数组选项中字符传不为 "`" 的项;
  var one = list.filter((item) => item[0] === '`');

  console.log('one', one);

  return `interface ${name[0].toUpperCase()}${name.slice(1)} {

  }`;
};

console.log(test('responseVariable', ''));
