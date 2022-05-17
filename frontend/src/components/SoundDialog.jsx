import { Popover, Box, Stack, Slider } from '@mui/material';
import { VolumeUp, VolumeDown } from '@mui/icons-material';
import { useState } from 'react';
const SoundDialog = ({
  anchorEl,
  setAnchorEl,
  value,
  setValue,
  audioSetting,
}) => {
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handleChange = (event) => {
    setValue(event.target.value);
    audioSetting.volume = value;
  };
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'left',
      }}
    >
      <Box sx={{ p: 0.8, width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <>
            <VolumeDown />
            <Slider
              defaultValue={0.5}
              step={0.1}
              min={0}
              max={1}
              aria-label="Volume"
              value={value}
              onChange={handleChange}
            />
            <VolumeUp />
          </>
        </Stack>
      </Box>
    </Popover>
  );
};
export default SoundDialog;
