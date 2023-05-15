import React from "react";
import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import EstateDetailsSection from "@/components/Estate/estate-details-section";
import Topbar from "@/components/React/global-components/topbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import api from "@/hooks/api";
import { apiURL } from "@/constants";
import BuildingDetails from "@/components/Buildings/BuildingDetails";

function DeveloperDetails(developerData) {
    return <div>
        <Topbar />
        <Navbar />
        <BuildingDetails  developerData={developerData}/>
        <Footer />
    </div>;
}

export async function getServerSideProps(context) {
    const { id } = context.query;
    const estateDataResponse = await api(context.locale).get(apiURL + "api/estates/" + id);
    const developerData = {
        "id": 68,
        "price": "600 USD",
        "code": "111-68",
        "room_count": 1,
        "old_price": 500,
        "full_address": "Երևան, Փոքր Կենտրոն, Զաքյան, 3, 77",
        "public_text_arm": "«The View » -ն նոր՝ 20 հարկանի, պրեմիում դասի բնակելի համալիր է Նոր Նորքի 1-ին զանգվածում՝ Լվովյան 108/2 հասցեում։\n" +
            "    Համալիրի տեղադիրքն ու ժամանակակից ճարտարապետական լուծումներն կատարելապես լրացնելով միմյանց՝ ստեղծել են լիարժեք ապրելու իդեալական միջավայր։ \n" +
            "    Համալիրը գտնվում է Նոր Նորքի բարձունքում, ինչը հնարավորություն է տալիս ապագա բնակիչներին անվերջ հիանալ Նոր Նորքի բարձունքից դեպի Երևանի կենտրոն, Արարատ լեռ, Արագած լեռ բացվող պանորամային տեսարանով, որտեղից էլ առաջացել է համալիրի անվանումը՝ «The View » (Տեսարան)։ \n" +
            "    Ոտքով քայլելու հեռավորության վրա են գտնվում՝ Գայի պողոտան, Մեգամոլը (900մ), Նանսենի այգին։  \n\n\n" +
            "    Համալիրում նախատեսված է 3 ստորգետյա հարկով ավտոկայանատեղի, 2 կոմերցիոն նշանակության և 18 բնակելի հարկեր։\n" +
            "Համալիրի ճակատային հատվածն ամբողջությամբ ապակյա է։ \n" +
            "   Համալիրն ունի 43քմ-ից մինչև 129քմ, 2, 3 և 4 սենյականոց գերհարմարավետ ու գրագետ պլանավորմամբ, վիտրաժային պատուհաններով բնակարաններ։ \n" +
            "    Բնակարանները հանձնվելու են շահագործման արտաքին որակյալ դռնով ու պատուհանները տեղադրված, սենյակների բաժանված, պատերը՝ գաջված, հատակը հարթեցված վիճակում։ \n" +
            "Ձեռք բերելով բնակարան «The View » համալիրում՝ դուք կարող եք վճարել ինչպես կանխիկ՝ տարաժամկետ վճարման պայմանով, այնպես էլ հիփոթեքային վարկավորման միջոցով։\n" +
            "       Գործում է ԵԿԱՄՏԱՀԱՐԿԻ ՎԵՐԱԴԱՐՁԻ ՄԱԱՍԻՆ ՕՐԵՆՔԸ։ \n" +
            "       Գործընկեր բանկեր՝ Արցախ բանկ, ID Bank, AEB: \n" +
            "Շինարարական աշխատանքները մեկնարկած են 01․12․2021թ․-ից։\n" +
            "Շին․ ավարտ՝  12․ 2024թ․ ։\n" +
            "Նախագծի կառավարումն իրականացնում է ՀՀ-ում բազմամյա փորձ ունեցող «1SQ» ՍՊ Ընկերությունը։",
        "name": "Անթերի բնակարան  բոլոր հարմարություններով:",
        "area_total": 40,
        "floor": 8,
        "building_floor_count": 11,
        "building_attributes": {
            "building_floor_type": {
                "value": "պանել",
                "label": "estate.building_floor_type"
            },
            "building_structure_type": {
                "value": "Ե/բ  կարկաս",
                "label": " Շենքի կառուցվածք"
            },
            "building_type": {
                "value": "պանելային",
                "label": " Արտաքին պատեր"
            },
            "building_project_type": {
                "value": "Պանելային տիպային",
                "label": " Շենքի նախագիծը"
            },
            "ceiling_height_type": {
                "value": null,
                "label": "estate.ceiling_height_type"
            },
            "commercial_purpose_type": {
                "value": null,
                "label": "estate.commercial_purpose_type"
            },
            "communication_type": {
                "value": null,
                "label": "Ենթակառուցվածքներ"
            },
            "elevator_type": {
                "value": "Պետական",
                "label": " Վերելակի տեսակ"
            },
            "entrance_door_position": {
                "value": "Դեմ դիմաց",
                "label": " Բն. դռան դիրքը աստիճանավանդակից"
            },
            "entrance_door_type": {
                "value": null,
                "label": " Մուտքի դռան տեսակ"
            },
            "entrance_type": {
                "value": null,
                "label": "estate.entrance_type"
            },
            "exterior_design_type": {
                "value": "Առանց հարդարման",
                "label": " Շենքը արտաքինից"
            },
            "courtyard_improvement": {
                "value": null,
                "label": " Շենքի բակի բարեկարգում"
            },
            "distance_public_objects": {
                "value": "Մինչև 50 մ",
                "label": " Հեռ. հասարակական օբյեկտներից"
            },
            "fence_type": {
                "value": null,
                "label": "Ցանկապատի տեսակ"
            },
            "front_with_street": {
                "value": null,
                "label": "Ճակատային դիրք"
            },
            "heating_system_type": {
                "value": "գազի վառարան",
                "label": " Ջեռ. համակարգ"
            },
            "house_building_type": {
                "value": null,
                "label": " Առանձնատան կառուցման տեսակ"
            },
            "house_floors_type": {
                "value": null,
                "label": "Առանձնատան հարկայնությունը"
            },
            "land_structure_type": {
                "value": null,
                "label": "Հողի երկրաչափական տեսք"
            },
            "land_type": {
                "value": null,
                "label": "Հողի նպատակային նշանակությունը"
            },
            "land_use_type": {
                "value": null,
                "label": "Հողի օգտագործման նպատակը"
            },
            "parking_type": {
                "value": "բացօթյա",
                "label": " Ավտոկանգառի տեսակ"
            },
            "registered_right": {
                "value": null,
                "label": " Գրանցման իրավունք"
            },
            "repairing_type": {
                "value": "լավ / կապիտալ /",
                "label": " Վերանորոգման տեսակ"
            },
            "road_way_type": {
                "value": null,
                "label": "Ճանապարհի տեսակ"
            },
            "roof_material_type": {
                "value": null,
                "label": " Տանիքի նյութի տեսակ"
            },
            "roof_type": {
                "value": null,
                "label": " Տանիքի կավարամած"
            },
            "separate_entrance_type": {
                "value": null,
                "label": "estate.separate_entrance_type"
            },
            "service_fee_type": {
                "value": "Չունի",
                "label": " Սպասարկման վճարի տեսակ"
            },
            "vitrage_type": {
                "value": null,
                "label": "estate.vitrage_type"
            },
            "windows_view": {
                "value": null,
                "label": " Պատուհանների դիրք"
            },
            "building_window_count": {
                "value": null,
                "label": " Բն. արտաքին պատուհանների քանակ"
            }
        },
        "year": "1970-80 ականներ",
        "name_arm": "Անթերի բնակարան  բոլոր հարմարություններով:",
        "images": [
            "/assets/img/theview/view1.gif",
            "/assets/img/theview/view2.gif",
            "/assets/img/theview/view3.gif",
        ],
        "image": "2020-04-01-16/1585743348188531.jpg",
        "contact": ""
    }



    return {
        props: {
            ...(await serverSideTranslations(context.locale, [
                'common',
                'footer',
            ])), developerData
            // Will be passed to the page component as props
        },
    }
}
export default DeveloperDetails;

