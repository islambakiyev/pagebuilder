package kz.bitlab.finalproject.pagebuilder.service;

import kz.bitlab.finalproject.pagebuilder.dto.BlockDTO;
import kz.bitlab.finalproject.pagebuilder.dto.PageDTO;
import kz.bitlab.finalproject.pagebuilder.mapper.PageMapper;
import kz.bitlab.finalproject.pagebuilder.model.Page;
import kz.bitlab.finalproject.pagebuilder.model.WebSite;
import kz.bitlab.finalproject.pagebuilder.repository.PageRepository;
import kz.bitlab.finalproject.pagebuilder.repository.WebSiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PageService {

    @Autowired
    private PageRepository pageRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private PageMapper pageMapper;

    @Autowired
    private WebSiteRepository webSiteRepository;

    public PageDTO createPage(PageDTO page){
        WebSite webSite = webSiteRepository.findById(page.getWebSiteId()).orElseThrow();
        Page pageEntity = pageMapper.toEntity(page);
        pageEntity.setWebSite(webSite);
        if(!(pageEntity.getUser()!=null && page.getUser().getId()!=null)){
            pageEntity.setUser(userService.getCurrentUser());
        }
        return pageMapper.toDto(pageRepository.save(pageEntity));
    }

    public List<PageDTO> getPages(Long websiteId){
        List<Page> pages = pageRepository.findAllByWebSite_Id(websiteId);
        return pageMapper.toDtoList(pages);
    }

    public PageDTO updatePage(PageDTO page){
        Page pageEntity = pageMapper.toEntity(page);
        if(!(pageEntity.getUser()!=null && page.getUser().getId()!=null)){
            pageEntity.setUser(userService.getCurrentUser());
        }
        WebSite webSite = webSiteRepository.findById(page.getWebSiteId()).orElseThrow();
        pageEntity.setWebSite(webSite);
        return pageMapper.toDto(pageRepository.save(pageEntity));
    }

    public PageDTO getPage(Long id){
        Page page = pageRepository.findById(id).orElseThrow();
        return pageMapper.toDto(page);
    }

    public void deletePage(Long id){
        pageRepository.deleteById(id);
    }

    public String generateHtmlFile(PageDTO page){
        StringBuilder html = new StringBuilder();

        html.append("<!DOCTYPE html>");
        html.append("<html>");
        html.append("<head>");
        html.append("<meta charset='utf-8'>");
        html.append("<meta name='viewport' content='width=device-width, initial-scale=1'>");
        html.append("<title>").append(page.getTitle()).append("</title>");
        html.append("<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css' " +
                "rel='stylesheet'");
        html.append("</head>");
        html.append("<body>");

        for(BlockDTO block : page.getBlocks()){
            html.append("<div>").append(block.getText()).append("</div>");
        }

        html.append("</body>");
        html.append("</html>");
        return html.toString();
    }

    public ResponseEntity<Resource> export(String htmlContent){
        byte[] byteArray = htmlContent.getBytes();
        ByteArrayResource resource = new ByteArrayResource(byteArray);
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_TYPE, "application/octet-stream");
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename='exported_page.html'");
        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(byteArray.length)
                .body(resource);
    }
}
