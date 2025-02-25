import { Button } from '~/components/ui/button';
import { formatCompactNumber } from '~/shared/utils/format';

export default function Home() {
  return (
    <div className="space-x-3">
      <Button>{formatCompactNumber(1234567890, 2)}</Button>
      <Button>{formatCompactNumber(12345)}</Button>
      <Button>{formatCompactNumber(1234567890)}</Button>
      <Button>{formatCompactNumber(1234567890)}</Button>
      <Button>{formatCompactNumber(1234567890)}</Button>
    </div>
  );
}
