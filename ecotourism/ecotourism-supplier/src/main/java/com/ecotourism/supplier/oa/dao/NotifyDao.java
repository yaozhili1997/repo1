package com.ecotourism.supplier.oa.dao;

import com.ecotourism.supplier.oa.domain.NotifyDO;
import com.ecotourism.supplier.oa.domain.NotifyDTO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * 通知通告
 * 
 * @author chqy
 * @email chqy_ljy@163.com
 * @date 2017-10-05 17:11:16
 */
@Mapper
public interface NotifyDao {

	NotifyDO get(Long id);

	List<NotifyDO> list(Map<String, Object> map);

	int count(Map<String, Object> map);

	int save(NotifyDO notify);

	int update(NotifyDO notify);

	int remove(Long id);

	int batchRemove(Long[] ids);

	List<NotifyDO> listByIds(Long[] ids);

	int countDTO(Map<String, Object> map);

	List<NotifyDTO> listDTO(Map<String, Object> map);
}
