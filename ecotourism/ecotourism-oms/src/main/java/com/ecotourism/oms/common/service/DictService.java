package com.ecotourism.oms.common.service;

import com.ecotourism.oms.common.domain.DictDO;

import java.util.List;
import java.util.Map;

/**
 * 字典表
 * 
 * @author chglee
 * @email 1992lcg@163.com
 * @date 2017-09-29 18:28:07
 */
public interface DictService {
	
	DictDO get(Long id);
	
	List<DictDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(DictDO dict);
	
	int update(DictDO dict);
	
	int remove(Long id);
	
	int batchRemove(Long[] ids);

	List<DictDO> listType();
	
	String getName(String type, String value, String companyNo);
	String getName(String type, String value);

	/**
	 * 获取性别列表
 	 * @return
	 */
	List<DictDO> getSexList();

	/**
	 * 根据type获取数据
	 * @param type
	 * @return
	 */
	List<DictDO> listByType(String type);

    /**
     * 将对象中的字典字段变为name
     * @param obj
     * @return
     */
	Object buildDictName(Object obj);
}
