package appAppcess.repository;

import org.springframework.stereotype.Repository
import org.springframework.data.repository.CrudRepository
import appAppcess.domain.Log

@Repository
interface RepoLog extends CrudRepository<Log, Long> {
	
	override findAll();
	
}
