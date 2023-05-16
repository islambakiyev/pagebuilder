package kz.bitlab.finalproject.pagebuilder.api;

import kz.bitlab.finalproject.pagebuilder.dto.PageDTO;
import kz.bitlab.finalproject.pagebuilder.dto.WebSiteDTO;
import kz.bitlab.finalproject.pagebuilder.service.ImageUploadService;
import kz.bitlab.finalproject.pagebuilder.service.PageService;
import kz.bitlab.finalproject.pagebuilder.service.WebSiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.util.*;

@RestController
@RequestMapping(value = "/api/page")
public class PageController {


    @Autowired
    private PageService pageService;

    @Autowired
    private WebSiteService webSiteService;

    @Autowired
    private ImageUploadService imageUploadService;

    @PostMapping
    public PageDTO savePage(@RequestBody PageDTO page){
        return pageService.createPage(page);
    }

    @PostMapping("/sites")
    public WebSiteDTO saveWebSite(@RequestBody WebSiteDTO webSite){
        return webSiteService.createWebSite(webSite);
    }

    @GetMapping("/sites")
    public List<WebSiteDTO> getSites(){
        return webSiteService.getSites();
    }

    @GetMapping("/site/{websiteId}")
    public List<PageDTO> getPages(@PathVariable Long websiteId){
        return pageService.getPages(websiteId);
    }

    @PutMapping("{id}")
    public PageDTO updatePage(@PathVariable Long id, @RequestBody PageDTO page){
        page.setId(id);
       return pageService.updatePage(page);
    }

    @GetMapping(value = "{id}")
    public PageDTO getPage(@PathVariable(name = "id") Long id){
        return pageService.getPage(id);
    }

    @DeleteMapping("{id}")
    public void deletePage(@PathVariable Long id){
        pageService.deletePage(id);
    }

    @PostMapping("upload-image")
    public Map<String, List<Object>> uploadImage(@RequestParam(name = "files[]") MultipartFile file){
        return imageUploadService.imageUploadService(file);
    }

    @GetMapping("exportPage/{id}")
    public ResponseEntity<Resource> exportPage(@PathVariable Long id){
        PageDTO page = pageService.getPage(id);
        String htmlContent = pageService.generateHtmlFile(page);
        return pageService.export(htmlContent);
    }

}
