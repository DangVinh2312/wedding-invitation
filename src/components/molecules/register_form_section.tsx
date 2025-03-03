import { ActionIcon, Box, Button, Group, Image, Stack, Text, TextInput, Title, Transition } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconGift, IconPhone, IconUser } from '@tabler/icons-react';
import { useRef, useState } from 'react';
import supabase from '../../api/request';
import BaseSection from '../atoms/base_section';

const transitionDuration = 500;

function RegisterFormSection() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeDebounce] = useDebouncedValue(activeSection, transitionDuration);

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  async function handleSubmit() {
    if (!nameRef.current?.value || !phoneRef.current?.value) {
      return;
    }
    const { error } = await supabase.from('participants').insert({
      name: nameRef.current.value,
      phone: phoneRef.current.value,
    });

    if (error) {
      console.error(error);
    }
    nameRef.current.value = '';
    phoneRef.current.value = '';
    alert('Cảm ơn bạn đã đăng ký tham dự!');
  }

  return (
    <BaseSection>
      <Group visibleFrom='sm' flex={1} gap={0} bg='red.4' justify='center' align='center' pos='relative' h='100%'>
        <Stack
          style={{
            visibility: activeDebounce === 0 ? 'visible' : 'hidden',
          }}
          justify='flex-start'
          align='center'
          gap='xl'
          h='100%'
          w='50%'
          px='sm'
        >
          <Stack align='center' gap={0}>
            <Title order={2} c='white' size='4rem' ff='MeaCulpa-Regular' p='xl'>
              Hộp mừng cưới
            </Title>
            <Text ff='monospace' c='white'>
              Nếu có thể, bạn hãy tới tham dự Đám cưới, chung vui và Mừng cưới trực tiếp cho chúng mình. Cảm ơn bạn rất
              nhiều!
            </Text>
          </Stack>
          <Group justify='center' h='50%'>
            <Image src='/images/qr.jpeg' alt='qr' h='100%' p='sm' />
          </Group>
        </Stack>
        <Stack
          style={{
            visibility: activeDebounce === 1 ? 'visible' : 'hidden',
          }}
          justify='flex-start'
          align='center'
          gap='xl'
          h='100%'
          w='50%'
        >
          <Title order={2} c='white' size='4rem' ff='MeaCulpa-Regular' p='xl'>
            Tham dự đám cưới
          </Title>
          <Stack flex={1} w='100%' p='xl' align='center' gap='xl'>
            <TextInput
              ref={nameRef}
              withAsterisk
              size='xl'
              label='Họ và tên'
              labelProps={{
                c: 'white',
              }}
              w='100%'
            />
            <TextInput
              ref={phoneRef}
              withAsterisk
              size='xl'
              label='Số điện thoại'
              labelProps={{
                c: 'white',
              }}
              w='100%'
            />
            <Button size='lg' variant='outline' color='white' onClick={() => handleSubmit()}>
              Đăng ký
            </Button>
          </Stack>
        </Stack>
        <Transition
          mounted={true}
          transition={{
            in: { right: 0 },
            out: { right: '50%' },
            transitionProperty: 'right',
          }}
          duration={transitionDuration}
          timingFunction='linear'
          keepMounted
        >
          {(transitionStyle) => (
            <Box
              style={{ ...transitionStyle, zIndex: 1 }}
              pos='absolute'
              top={0}
              bottom={0}
              right={activeSection === 0 ? 0 : '50%'}
              bg='red.6'
              w='50%'
            >
              {activeDebounce === 0 && (
                <Stack justify='center' align='center' gap={0} h='100%' w='100%'>
                  <Title order={2} c='white' size='3rem' ff='MeaCulpa-Regular' fw='lighter' p='xl'>
                    Đăng ký tham dự
                  </Title>{' '}
                  <ActionIcon variant='outline' color='white' size='6rem' onClick={() => setActiveSection(1)}>
                    <IconArrowNarrowLeft />
                  </ActionIcon>
                </Stack>
              )}
              {activeDebounce === 1 && (
                <Stack justify='center' align='center' gap={0} h='100%' w='100%'>
                  <Title order={2} c='white' size='3rem' ff='MeaCulpa-Regular' fw='lighter' p='xl'>
                    Gửi quà mừng cưới
                  </Title>
                  <ActionIcon variant='outline' color='white' size='6rem' onClick={() => setActiveSection(0)}>
                    <IconArrowNarrowRight />
                  </ActionIcon>
                </Stack>
              )}
            </Box>
          )}
        </Transition>
      </Group>
      <Stack hiddenFrom='sm' flex={1} gap={0} bg='red.4' justify='center' align='center' pos='relative'>
        {activeSection === 0 && (
          <Stack justify='flex-start' align='center' gap='xl' flex={1}>
            <Stack align='center' justify='center' gap={0}>
              <Title order={2} c='white' size='2.5rem' ff='MeaCulpa-Regular' p='xl'>
                Hộp mừng cưới
              </Title>
              <Text ff='monospace' c='white' size='sm' px='xs'>
                Nếu có thể, bạn hãy tới tham dự Đám cưới, chung vui và Mừng cưới trực tiếp cho chúng mình. Cảm ơn bạn
                rất nhiều!
              </Text>
            </Stack>
            <Group justify='center'>
              <Image src='/images/qr.jpeg' alt='qr' w='70%' p='sm' />
            </Group>
            <Button variant='outline' color='white' onClick={() => setActiveSection(1)}>
              Đăng ký tham dự
            </Button>
          </Stack>
        )}

        <Transition
          transition={{
            in: { opacity: 1 },
            out: { opacity: 0 },
            transitionProperty: 'opacity',
          }}
          duration={transitionDuration}
          timingFunction='ease'
          mounted={activeSection === 1}
        >
          {(transitionStyle) => (
            <Stack
              pos='absolute'
              bg='red.4'
              style={{
                ...transitionStyle,
                zIndex: 1,
              }}
              top={0}
              bottom={0}
              left={0}
              right={0}
              justify='flex-start'
              align='center'
              gap='sm'
              px='sm'
            >
              <Title order={2} c='white' size='2.5rem' ff='MeaCulpa-Regular' p='xl'>
                Tham dự đám cưới
              </Title>
              <Stack flex={1} w='100%' p='xl' align='center' gap='xl'>
                <TextInput
                  ref={nameRef}
                  withAsterisk
                  size='xl'
                  label='Họ và tên'
                  leftSection={<IconUser />}
                  labelProps={{
                    c: 'white',
                  }}
                  w='100%'
                />
                <TextInput
                  ref={phoneRef}
                  withAsterisk
                  size='xl'
                  label='Số điện thoại'
                  leftSection={<IconPhone />}
                  labelProps={{
                    c: 'white',
                  }}
                  w='100%'
                />
                <Button size='lg' variant='outline' color='white' onClick={() => handleSubmit()}>
                  Đăng ký
                </Button>
                <ActionIcon size='xl' variant='outline' color='white' onClick={() => setActiveSection(0)}>
                  <IconGift />
                </ActionIcon>
              </Stack>
            </Stack>
          )}
        </Transition>
      </Stack>
    </BaseSection>
  );
}

export default RegisterFormSection;
