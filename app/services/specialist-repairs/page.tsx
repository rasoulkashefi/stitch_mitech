import { permanentRedirect } from 'next/navigation';

export default function DeprecatedSpecialistRepairsPage() {
  permanentRedirect('/services/repairs');
}
