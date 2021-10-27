package repository;

import org.springframework.stereotype.Repository
import org.springframework.data.repository.CrudRepository
import domain.Log

@Repository
interface RepoLog extends CrudRepository<Log, Long> {
	
	override findAll();
	
}