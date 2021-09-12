package controllers;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.eclipse.jetty.server.Request;
import org.uqbar.xtrest.api.annotation.Controller;
import org.uqbar.xtrest.result.ResultFactory;

@Controller
@SuppressWarnings("all")
public class ControllerUsuarios extends ResultFactory {
  public void handle(final String target, final Request baseRequest, final HttpServletRequest request, final HttpServletResponse response) throws IOException, ServletException {
    //this.pageNotFound(baseRequest, request, response);
  }
}
