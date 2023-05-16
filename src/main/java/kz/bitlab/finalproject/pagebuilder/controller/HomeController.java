package kz.bitlab.finalproject.pagebuilder.controller;

import kz.bitlab.finalproject.pagebuilder.dto.PageDTO;
import kz.bitlab.finalproject.pagebuilder.dto.WebSiteDTO;
import kz.bitlab.finalproject.pagebuilder.service.PageService;
import kz.bitlab.finalproject.pagebuilder.service.UserService;
import kz.bitlab.finalproject.pagebuilder.service.WebSiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class HomeController {

    @Autowired
    private UserService userService;

    @Autowired
    private PageService pageService;

    @Autowired
    private WebSiteService siteService;

    @GetMapping(value = "/sign-in")
    public String signIn(Model model){
        return "signinpage";
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/profile")
    public String profilePage(Model model){
        return "profile";
    }

    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    @GetMapping(value = "/admin")
    public String admin(Model model){
        return "admin";
    }

    @GetMapping(value = "/403")
    public String accessDenied(Model model){
        return "accessdenied";
    }

    @GetMapping(value = "/sign-up")
    public String signUp(Model model){
        return "registerpage";
    }

    @PostMapping(value = "/to-register")
    public String toRegister(@RequestParam(name = "user_email") String email,
                             @RequestParam(name = "user_password") String password,
                             @RequestParam(name = "user_re_password") String rePassword,
                             @RequestParam(name = "user_full_name") String fullName){
        Boolean result = userService.registerUser(email, password, rePassword, fullName);

        if(result!=null){
            if(result.equals(Boolean.TRUE)){
                return "redirect:/sign-up?success";
            }else{
                return "redirect:/sign-up?passworderror";
            }
        }else {
            return "redirect:/signup?usererror";
        }
    }

    @GetMapping(value = "/pagebuilder/{id}")
    public String getPage(@PathVariable(name = "id") Long id, Model model){
        PageDTO page = pageService.getPage(id);
        WebSiteDTO site = siteService.getSite(page.getWebSiteId());
        model.addAttribute("page", page);
        model.addAttribute("site", site);
        return "pagebuilder";
    }

    @GetMapping(value = "/{id}")
    public String getSite(@PathVariable(name = "id") Long id, Model model){
        WebSiteDTO site = siteService.getSite(id);
        model.addAttribute("site", site);
        return "pages";
    }


}
