package services;

import org.springframework.stereotype.Service;

import repository.RepoLog;

import org.springframework.beans.factory.annotation.Autowired;


@Service
class LogService {
	
	@Autowired
	RepoLog repoLog;

	def getLogs() {
		return repoLog.findAll().toList;
	}
}