package com.ecotourism.manage.sms.service;

import com.ecotourism.manage.sms.domain.SendDataDO;

import java.util.List;
import java.util.Map;

/**
 * 短信发送数据
 * 
 * @author 陈启勇
 * @email chqy_ljy@163.com
 * @date 2018-06-07 20:53:33
 */
public interface SendDataService {
	
	SendDataDO get(Integer id);
	
	List<SendDataDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(SendDataDO sendData);
	
	int update(SendDataDO sendData);
	
	int remove(Integer id);
	
	int batchRemove(Integer[] ids);
}
