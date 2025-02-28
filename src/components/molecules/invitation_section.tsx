import { Box, Button, Group, Stack, Text, Timeline, Title } from '@mantine/core';
import { IconCalendarWeek, IconClockHour10, IconMapPin, IconMapSearch } from '@tabler/icons-react';
import BaseSection from '../atoms/base_section';
import HeartsIcon from '../atoms/icons/hearts';
import MarriageRingIcon from '../atoms/icons/marriage_ring';

function InvitationSection() {
  const invitationData = [
    {
      title: 'Lễ thành hôn',
      date: 'Chủ Nhật, ngày 09 tháng 03 năm 2025',
      time: '10 giờ 00',
      address: 'Nhà trai - Số 18 ngách 426/48 đường Láng, Đống Đa, Hà Nội',
      location: `https://www.google.com/maps/place/21%C2%B000'38.4%22N+105%C2%B048'47.6%22E/@21.010669,105.813214,17z/data=!3m1!4b1!4m4!3m3!8m2!3d21.010669!4d105.813214?entry=ttu&g_ep=EgoyMDI1MDIyNS4wIKXMDSoASAFQAw%3D%3D`,
      timeLineIcon: <HeartsIcon />,
    },
    {
      title: 'Tiệc cưới',
      date: 'Chủ Nhật, ngày 09 tháng 03 năm 2025',
      time: '11 giờ 00',
      address: 'Tầng 1 trung tâm tổ chức tiệc cưới và sự kiện Queen Bee - 20 Láng Hạ, Đống Đa, Hà Nội',
      location:
        'https://www.google.com/maps/place/Queen+Bee+Luxury/@21.0162328,105.8144029,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab63791d9ee5:0x9e6cca93a08ef5c!8m2!3d21.0162328!4d105.8144029!16s%2Fg%2F11cmpb3fnn?hl=vi&entry=ttu&g_ep=EgoyMDI1MDIyNS4wIKXMDSoASAFQAw%3D%3D',
      timeLineIcon: <MarriageRingIcon />,
    },
  ];

  return (
    <BaseSection>
      <Stack visibleFrom='sm' flex={1} justify='flex-start' align='center' gap='xl'>
        <Title order={2} size='4rem' ff='MeaCulpa-Regular' p='xl'>
          Trân trọng kính mời
        </Title>
        <Timeline bulletSize={40} color='red' active={invitationData.length - 1}>
          {invitationData.map((data, index) => (
            <Timeline.Item
              key={`${data.title}-${index}`}
              bullet={data.timeLineIcon}
              title={
                <Title order={3} size='1.8rem'>
                  {data.title}
                </Title>
              }
            >
              <Stack gap='xs'>
                <Group align='center'>
                  <IconCalendarWeek />
                  <Text size='xl'>{data.date}</Text>
                </Group>
                <Group align='center'>
                  <IconClockHour10 />
                  <Text size='xl'>{data.time}</Text>
                </Group>
                <Group align='center'>
                  <IconMapPin />
                  <Text size='xl'>{data.address}</Text>
                </Group>
                <Box>
                  <Button variant='outline' color='red.8' leftSection={<IconMapSearch />}>
                    Chỉ đường
                  </Button>
                </Box>
              </Stack>
            </Timeline.Item>
          ))}
        </Timeline>
      </Stack>
      <Stack hiddenFrom='sm' flex={1} justify='flex-start' align='center' gap='xl' px='sm'>
        <Title order={2} size='2.5rem' ff='MeaCulpa-Regular' p='xl'>
          Trân trọng kính mời
        </Title>
        <Timeline bulletSize={30} color='red' active={invitationData.length - 1}>
          {invitationData.map((data, index) => (
            <Timeline.Item
              key={`${data.title}-${index}`}
              bullet={data.timeLineIcon}
              title={
                <Title order={3} size='1.5rem'>
                  {data.title}
                </Title>
              }
            >
              <Stack gap='xs'>
                <Group align='center'>
                  <Group align='center'>
                    <IconCalendarWeek />
                  </Group>
                  <Text size='sm'>{data.date}</Text>
                </Group>
                <Group align='center'>
                  <Group align='center'>
                    <IconClockHour10 />
                  </Group>
                  <Text size='sm'>{data.time}</Text>
                </Group>
                <Group align='center' wrap='nowrap'>
                  <Group align='center'>
                    <IconMapPin />
                  </Group>
                  <Text size='sm'>{data.address}</Text>
                </Group>
                <Box>
                  <Button
                    component='a'
                    href={data.location}
                    variant='outline'
                    color='red.8'
                    leftSection={<IconMapSearch />}
                  >
                    Chỉ đường
                  </Button>
                </Box>
              </Stack>
            </Timeline.Item>
          ))}
        </Timeline>
      </Stack>
    </BaseSection>
  );
}

export default InvitationSection;
