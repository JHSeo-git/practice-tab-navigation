import { Counter } from '@/components/Counter';

interface IndexPageProps {}

function IndexPage(props: IndexPageProps) {
  return (
    <div>
      IndexPage <Counter />
    </div>
  );
}

export default IndexPage;
