import { Group, Image, MantineStyleProps, SimpleGrid, Stack, Title, Transition } from '@mantine/core';
import { useInViewport } from '@mantine/hooks';
import BaseSection from '../atoms/base_section';

const images = import.meta.glob('~/assets/images/wedding_album/*.{png,jpg,jpeg,svg,gif}', { eager: true });
const renderDuration = 300;

function AlbumImage({
  src,
  renderDelay = renderDuration,
  ...props
}: Readonly<{ src: string; renderDelay?: number } & MantineStyleProps>) {
  const { ref, inViewport } = useInViewport();

  return (
    <Group ref={ref} justify='center' w='100%'>
      <Transition mounted={inViewport} transition='fade' duration={renderDelay}>
        {(styles) => <Image style={styles} src={src} alt={src} {...props} />}
      </Transition>
    </Group>
  );
}

function GallerySection() {
  return (
    <BaseSection {...{ h: 'auto' }}>
      <Stack visibleFrom='sm' flex={1} bg='gray.2' justify='flex-start' align='center' gap='xl' pb='md'>
        <Title order={2} size='4rem' ff='MeaCulpa-Regular' p='xl'>
          Album ảnh cưới
        </Title>
        <SimpleGrid cols={2}>
          {Object.entries(images).map(([name, image]) => (
            <Image key={name} src={(image as { default: string }).default} h={500} alt={name} loading='lazy' />
          ))}
        </SimpleGrid>
      </Stack>
      <Stack hiddenFrom='sm' flex={1} bg='gray.2' justify='flex-start' align='center' gap='sm' pb='xl'>
        <Title order={2} size='3rem' ff='MeaCulpa-Regular' p='xl'>
          Album ảnh cưới
        </Title>
        <Stack align='center'>
          {Object.entries(images).map(([name, image], idx) => (
            <AlbumImage
              key={name}
              src={(image as { default: string }).default}
              w='80%'
              renderDelay={renderDuration * (idx + 1)}
            />
          ))}
        </Stack>
      </Stack>
    </BaseSection>
  );
}

export default GallerySection;
