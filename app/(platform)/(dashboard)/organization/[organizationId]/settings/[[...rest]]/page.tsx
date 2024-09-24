import { OrganizationProfile } from '@clerk/nextjs';

// TODO: Fix it the styles doesn't seem to work

const SettingsPage = () => {
  return (
    <div className="w-full">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: 'none !important',
              width: '100%',
            },
            card: {
              border: '1px solid #e5e5e5',
              boxShadow: 'none !important',
              width: '100%',
            },
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;
