import { Stack, Text } from '@mantine/core';
import BaseSection from '../atoms/base_section';

function ThanksSection() {
  return (
    <BaseSection>
      <Stack flex={1} justify='center' align='center' c='black' gap='xl'>
        <Text size='8rem' ff='LavishlyYours-Regular'>
          Thank you!
        </Text>
        <Text size='2rem'>Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi.</Text>
        <Text size='2rem'>Xin chân thành cảm ơn!</Text>
      </Stack>
    </BaseSection>
  );
}

export default ThanksSection;
