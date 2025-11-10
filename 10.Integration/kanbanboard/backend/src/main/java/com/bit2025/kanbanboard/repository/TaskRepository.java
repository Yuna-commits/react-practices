package com.bit2025.kanbanboard.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bit2025.kanbanboard.vo.TaskVo;

@Repository
public class TaskRepository {

	@Autowired
	private SqlSession sqlSession;

	public List<TaskVo> findAllByCardNo(Long cardNo) {
		return sqlSession.selectList("task.findAllByCardNo", cardNo);
	}

	public Boolean insert(TaskVo taskVo) {
		return sqlSession.insert("task.insert", taskVo) == 1;
	}

	public Boolean updateDone(Long no, String done) {
		return sqlSession.update("task.updateDone", 
				Map.of("no", no, "done", done)) == 1;
	}

	public Boolean deleteByNo(Long no) {
		return sqlSession.delete("task.deleteByNo", no) == 1;
	}

}
