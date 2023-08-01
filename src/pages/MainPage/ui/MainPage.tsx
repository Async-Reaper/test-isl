import {RouteTable} from "@widgets/RouteTable";
import {Map} from "@widgets/Map/ui/Map";
import cls from "./MainPage.module.scss";

const MainPage = () => {
   return (
      <div className={cls.main_page__wrapper}>
         <div className={cls.content__container}>
            <RouteTable />
            <Map />
         </div>
      </div>
   );
};

export default MainPage;
