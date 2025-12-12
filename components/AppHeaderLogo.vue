<script setup lang="ts">
  const appConfig = useAppConfig()
  import type { DropdownMenuItem } from '@nuxt/ui'

  const items: DropdownMenuItem[] = [
    {
      label: 'API v2',
      // icon: 'i-lucide-users',
      color: 'primary',
      to: '/v2/introduction'
    },
    {
      label: 'API v3 (comming soon)',
      // icon: 'i-lucide-plus'
    }
  ]
</script>

<template>
  <UColorModeImage
    v-if="appConfig.header?.logo?.dark || appConfig.header?.logo?.light"
    :light="appConfig.header?.logo?.light || appConfig.header?.logo?.dark"
    :dark="appConfig.header?.logo?.dark || appConfig.header?.logo?.light"
    :alt="appConfig.header?.logo?.alt || appConfig.header?.title"
    class="h-6 w-auto shrink-0"
  />
  <span v-else>
    {{ appConfig.header?.title || '{appConfig.header.title}' }}
  </span>

  <UFieldGroup>
    <UDropdownMenu size="xs" :items="items" :ui="{ content: 'w-(--reka-dropdown-menu-trigger-width)' }">
      <UButton
        size="xs"
        label="API v2"
        color="neutral"
        variant="outline"
        block
        icon="i-lucide-chevron-down"
      />
    </UDropdownMenu>
  </UFieldGroup>
</template>