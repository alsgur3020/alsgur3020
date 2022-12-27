@RestController
public class TestController {
    @GetMapping("/test")
    public String test(){
        String testStr = "Hi~~";
        System.out.println(testStr);https://github.com/alsgur3020/alsgur3020
        return testStr;
    }
}
