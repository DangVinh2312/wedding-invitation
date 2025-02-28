import '@mantine/core/styles.css';
import './app.css';

import { Box, createTheme, MantineProvider, ScrollArea, Stack } from '@mantine/core';
import BrideGloomSection from './components/molecules/bride_gloom_section';
import GallerySection from './components/molecules/gallery_section';
import InvitationSection from './components/molecules/invitation_section';
import RegisterFormSection from './components/molecules/register_form_section';
import ThanksSection from './components/molecules/thanks_section';
import WelcomeSection from './components/molecules/welcome_section';

const theme = createTheme({
  colors: {
    blushPink: [
      '#F9C9D9',
      '#F9C6D8',
      '#F9C3D6',
      '#F9C0D4',
      '#F8BED2',
      '#F8BCD1',
      '#F8BBD0', // your given color at position 7
      '#F3B7CC',
      '#EEB4C8',
      '#E9B0C4',
    ],
  },
  components: {
    Button: {
      defaultProps: {
        color: 'blushPink.9',
      },
    },
  },
});

function App() {
  const sections = [
    { id: 'welcome', component: <WelcomeSection /> },
    { id: 'invitation', component: <InvitationSection /> },
    { id: 'bride-gloom', component: <BrideGloomSection /> },
    { id: 'gallery', component: <GallerySection /> },
    { id: 'register', component: <RegisterFormSection /> },
    { id: 'thanks', component: <ThanksSection /> },
  ];

  return (
    <MantineProvider theme={theme}>
      <ScrollArea style={{ height: '100vh', width: '100vw' }}>
        <Stack pos='relative' gap={0}>
          {sections.map(({ id, component }) => (
            <Box key={id}>{component}</Box>
          ))}
        </Stack>
      </ScrollArea>
    </MantineProvider>
  );
}

export default App;
