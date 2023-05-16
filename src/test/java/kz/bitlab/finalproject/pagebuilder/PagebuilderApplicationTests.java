package kz.bitlab.finalproject.pagebuilder;

import kz.bitlab.finalproject.pagebuilder.dto.PageDTO;
import kz.bitlab.finalproject.pagebuilder.dto.WebSiteDTO;
import kz.bitlab.finalproject.pagebuilder.mapper.PageMapper;
import kz.bitlab.finalproject.pagebuilder.mapper.WebSiteMapper;
import kz.bitlab.finalproject.pagebuilder.model.Page;
import kz.bitlab.finalproject.pagebuilder.model.User;
import kz.bitlab.finalproject.pagebuilder.model.WebSite;
import kz.bitlab.finalproject.pagebuilder.repository.PageRepository;
import kz.bitlab.finalproject.pagebuilder.service.PageService;
import kz.bitlab.finalproject.pagebuilder.service.UserService;
import kz.bitlab.finalproject.pagebuilder.service.WebSiteService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class PagebuilderApplicationTests {

	@Autowired
	private PageMapper pageMapper;

	@Autowired
	private WebSiteMapper webSiteMapper;

	@Autowired
	private PageService pageService;

	@Autowired
	private UserService userService;

	@Autowired
	private WebSiteService webSiteService;

	@Autowired
	private PageRepository pageRepository;

	@Test
	public void PageDTOMapper(){
		User user = new User();
		user.setId(10L);
		user.setEmail("test@test.kz");
		user.setFullName("Brad Pitt");

		Page page = new Page();
		page.setId(10L);
		page.setUser(user);

		PageDTO pageDTO = pageMapper.toDto(page);

		Assertions.assertNotNull(pageDTO);
		Assertions.assertEquals(page.getId(), pageDTO.getId());
		Assertions.assertNotNull(pageDTO.getUser());
		Assertions.assertEquals(page.getUser().getId(), pageDTO.getUser().getId());

	}


	@Test
	public void checkPageInsert(){
		User user = createUser();
		user = userService.createUser(user);

		WebSite webSite = createWebSite();
		webSite = webSiteService.insertSite(webSite);

		Page page = new Page();
		page.setUser(user);
		page.setWebSite(webSite);
		page.setTitle("TEST");

		pageRepository.deleteAll();

		PageDTO createdPage = pageService.createPage(pageMapper.toDto(page));

		Assertions.assertNotNull(createdPage);
		Assertions.assertNotNull(createdPage.getId());

		List<Page> pages = pageRepository.findAll();
		Assertions.assertNotNull(pages);
		Assertions.assertTrue(pages.size()>0);

		Page checkPage = pageRepository.findById(createdPage.getId()).orElseThrow();
		Assertions.assertNotNull(checkPage);
		Assertions.assertEquals(createdPage.getId(), checkPage.getId());

		Assertions.assertNotNull(checkPage.getUser());
		Assertions.assertEquals(checkPage.getUser().getId(), createdPage.getUser().getId());

		pageRepository.deleteAll();
		userService.deleteUser(user.getId());

	}

	private User createUser(){
		User user = new User();
		user.setId(1L);
		user.setFullName("TEST TESTOV");
		user.setEmail("test@test.kz");
		return user;
	}

	private WebSite createWebSite(){
		WebSite webSite = new WebSite();
		webSite.setName("Test");
		webSite.setId(1L);
		return webSite;
	}

	@Test
	public void checkSiteInsert(){
		User user = createUser();
		user = userService.createUser(user);

		WebSite webSite = createWebSite();
		webSite = webSiteService.insertSite(webSite);
		webSite.setUser(user);

		WebSiteDTO webSiteDTO = webSiteMapper.toDto(webSite);

		Assertions.assertNotNull(webSiteDTO);
		Assertions.assertEquals(webSite.getId(),webSiteDTO.getId());
		Assertions.assertNotNull(webSiteDTO.getUser().getId());
		Assertions.assertEquals(webSite.getUser().getId(),webSite.getUser().getId());
	}

}
