package com.ecotourism.supplier.fin.service.impl;

import com.ecotourism.supplier.fin.dao.DataStatisticsDao;
import com.ecotourism.supplier.fin.domain.DataStatisticsDO;
import com.ecotourism.supplier.fin.service.DataStatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class DataStatisticsServiceImpl implements DataStatisticsService {
    @Autowired
    private DataStatisticsDao dataStatisticsDao;
    @Override
    public List<DataStatisticsDO> list(Map<String, Object> map) {
        return dataStatisticsDao.list(map);
    }

    @Override
    public int count(Map<String, Object> map) {
        return dataStatisticsDao.count(map);
    }
}
