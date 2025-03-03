import { Button, Collapse, Image, SimpleGrid, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import BaseSection from '../atoms/base_section';

const images = import.meta.glob('~/assets/images/wedding_album/*.{png,jpg,jpeg,svg,gif}', { eager: true });

function GallerySection() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <BaseSection {...{ h: 'auto' }}>
      <Stack visibleFrom='sm' flex={1} bg='gray.2' justify='flex-start' align='center' gap='xl' pb='xl'>
        <Title order={2} size='4rem' ff='MeaCulpa-Regular' p='xl'>
          Album ảnh cưới
        </Title>
        <Stack>
          <SimpleGrid cols={2}>
            {Object.entries(images)
              .slice(0, 4)
              .map(([name, image]) => (
                <Image key={name} src={(image as { default: string }).default} h={500} alt={name} loading='lazy' />
              ))}
          </SimpleGrid>
          <Collapse in={opened}>
            <SimpleGrid cols={2}>
              {Object.entries(images)
                .slice(4)
                .map(([name, image]) => (
                  <Image key={name} src={(image as { default: string }).default} h={500} alt={name} loading='lazy' />
                ))}
            </SimpleGrid>
          </Collapse>
        </Stack>
        {!opened && (
          <Button variant='outline' size='xl' onClick={toggle}>
            Xem thêm
          </Button>
        )}
      </Stack>
      <Stack hiddenFrom='sm' flex={1} bg='gray.2' justify='flex-start' align='center' gap='sm' pb='xl'>
        <Title order={2} size='3rem' ff='MeaCulpa-Regular' p='xl'>
          Album ảnh cưới
        </Title>

        <Stack align='center'>
          {Object.entries(images)
            .slice(0, 2)
            .map(([name, image]) => (
              <Image
                key={name}
                src={(image as { default: string }).default}
                w='80%'
                h={500}
                alt={name}
                loading='lazy'
              />
            ))}
          <Collapse in={opened} w='100%'>
            <Stack align='center'>
              {Object.entries(images)
                .slice(2)
                .map(([name, image]) => (
                  <Image
                    key={name}
                    src={(image as { default: string }).default}
                    w='80%'
                    h={500}
                    alt={name}
                    loading='lazy'
                  />
                ))}
            </Stack>
          </Collapse>
          {!opened && (
            <Button variant='outline' onClick={toggle}>
              Xem thêm
            </Button>
          )}
        </Stack>
      </Stack>
    </BaseSection>
  );
}

export default GallerySection;
