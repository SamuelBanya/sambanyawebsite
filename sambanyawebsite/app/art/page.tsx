import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Art',
};

export default function Page() {
  return (
    <div data-theme="greytheme">
      <p>Art</p>
    </div>
  );
}
