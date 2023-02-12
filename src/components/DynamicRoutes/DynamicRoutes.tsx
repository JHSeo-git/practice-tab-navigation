import { useRouteContext } from '@/context/RouteContext';
import { cn } from '@/lib/utils';

export function DynamicRoutes() {
  const { currentRoute, routes } = useRouteContext();

  return (
    <>
      {routes.map((route) => (
        <Visualizer key={route.path} visible={currentRoute === route}>
          {route.element}
        </Visualizer>
      ))}
    </>
  );
}

const Visualizer = ({
  visible = true,
  children,
}: {
  visible?: boolean;
  children: React.ReactNode;
}) => {
  return <div className={cn(visible ? 'block' : 'hidden')}>{children}</div>;
};
