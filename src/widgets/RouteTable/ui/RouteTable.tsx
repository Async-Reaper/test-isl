import React, {useCallback, useState} from "react";
import {classNames} from "@shared/lib";
import {useSelector} from "react-redux";
import {getAllRoutes, routesActions, RoutesType} from "@entities/Routes";
import {useAppDispatch} from "@shared/lib/hooks";

import cls from "./RouteTable.module.scss";

const Component = () => {
   const routes = useSelector(getAllRoutes);
   const dispatch = useAppDispatch();

   const [idRoute, setIdRoute] = useState<number | undefined>(undefined);

   const onChangeRoute = useCallback((id: number | undefined) => {
      setIdRoute(id);
      const route: RoutesType = routes.filter(route => route.id === id)[0];
      dispatch(routesActions.setCurrentRoute(route));
   }, [routes, setIdRoute, dispatch]);

   return (
      <div>
         <table className={cls.table}>
            <thead>
               <tr>
                  <th>Маршрут</th>
                  <th>Точка 1 (lat, lng)</th>
                  <th>Точка 2 (lat, lng)</th>
                  <th>Точка 3 (lat, lng)</th>
               </tr>
            </thead>
            <tbody>
               {
                  routes.map((route) =>
                     <tr
                        key={route.id}
                        className={classNames(cls.tr, {[cls.active]: route.id === idRoute}, )}
                        onClick={() => onChangeRoute(route.id)}
                        onDoubleClick={() => onChangeRoute(undefined)}
                     >
                        <td>{route.route}</td>
                        <td>{route.point1.toString()}</td>
                        <td>{route.point2.toString()}</td>
                        <td>{route.point3.toString()}</td>
                     </tr>
                  )
               }
            </tbody>
         </table>
      </div>
   );
};

export const RouteTable = React.memo(Component);
