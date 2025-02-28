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
      location: 'https://goo.gl/maps/1J1J1J1J1J1J1J1',
      timeLineIcon: <HeartsIcon />,
    },
    {
      title: 'Tiệc cưới',
      date: 'Chủ Nhật, ngày 09 tháng 03 năm 2025',
      time: '11 giờ 00',
      address: 'Tầng 1 trung tâm tổ chức tiệc cưới và sự kiện Queen Bee - 20 Láng Hạ, Đống Đa, Hà Nội',
      location: 'https://goo.gl/maps/1J1J1J1J1J1J1J1J1',
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
        <Title order={2} size='3rem' ff='MeaCulpa-Regular' p='xl'>
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
                  <Button variant='outline' color='red.8' leftSection={<IconMapSearch />}>
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
