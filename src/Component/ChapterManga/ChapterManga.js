function ChapterManga() {
    let hash = "47f909673a08fa2d91c5fa3473da688d"
    let datas = ["1-7b0737210a1b1ae4c4973d329217476aab00b4096145f69af9aa1955738454d0.png",
        "2-aae180934aa6c80bf0fd63a05d99495d7698d2b989b6778ef31eb31445612af4.png",
        "3-1686b4c3a0193aa09380f349e80be4e7e0c7a649877409cf51615d6c793d8acb.png",
        "4-307316945ee84286f5ea292dc60f094c5f6e528d157fe1e65518b52b60df445e.png",
        "5-a50c336054c667f7699ca0695f59c242968e8b711bf76179ee3f98f724455e06.png",
        "6-c26270962aa7af59c379488b65336203df02d53ddc3b61ddee8ea54f5b53de10.png",
        "7-0ecca9ea0172fec6496d25717164e12574f816990f1b0e4f90fa91e2783adc08.png",
        "8-141c5e4400f7dc0ee3c032a0f9525db69328bb514ba7770384473248df1e510b.png",
        "9-69e3e66c79652364bf18d338e24345f4d9ff75de9ab9c90d6e3913af98357a28.png",
        "10-a690a623dc5d78432e26b84837c85363d77e982270c48e5c7ec122c879b3e94a.png",
        "11-31db1ba939e31801d2856233947390f633e2411446541d0bbab5f7f84b55dac3.png",
        "12-61939d3e0936d0ec5554758daeed863c728bcf4d938b6dc6645d01aa2618991d.png",
        "13-a87a5091c300e0a368496ba143d25164987628ae5e91f9061196d4e129c191a8.png",
        "14-7f4ea78585b0e79cff84a69c019946530bc7cca0df033250aa465532a0672531.png",
        "15-de6baec0d446ca16b7d700ef6f266b6f492697594aea6559ce1ee28df53c358d.png",
        "16-dc28af9138d0d993adfd7c0ad43f561f16303fa0c3032a9c8b9198b8e65c14dc.png",
        "17-70d9bfa4f1b3c8224aecf681c3c96475856f88755f3a2b0e28a967dac0a5ded4.png",
        "18-2ae529794dfc9f434bc7977a2894df894634c0669cb7b214d40e537bf5a7d64d.png",
        "19-10fb2b7e1f73fd936cbcc682fbb1a6ee09a353dd09df513661482e8c1485ae23.png",
        "20-d270378089c67ca0212862327817bf58da92da936470394753b005cef5a8e978.png",
        "21-c094a58e3962dda18dae87f19a48c987ab5a97e72987877ebd7fef2beb6a0df1.png",
        "22-3e23d5c14605fdf4463ff473938a06ea4c8637dc1b35003c6b523ac012cbdd82.png",
        "23-10a3fef6df94f161320052af60da77aeda62d861ed0913d8d9e69cb6cb534bb1.png",
        "24-08456eb0a578270943e180d6712d772b53e693adfe00301594286457a738f9ac.png",
        "25-456eaeb239aad7fe291cbe1eca722e971db066492302e0d146a2257701447ad0.png",
        "26-1adf5040481ab2170fdccb0a8d66e9891efd803cd6eebd511e990c53ee741886.png"]
    let baseUrl = "https://uploads.mangadex.org"
    return (
        <>
            {
                datas.map((data, index) => {
                    let url = `${baseUrl}/data/${hash}/${data}`
                    return (
                        <img src={url} alt={index} key={`img-${index}`} loading="lazy" />
                    )
                })
            }
        </>
    )
}
export default ChapterManga