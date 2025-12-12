<script setup lang="ts">
  const appConfig = useAppConfig()
  import type { DropdownMenuItem } from '@nuxt/ui'

  const items: DropdownMenuItem[] = [
    {
      label: 'Example One',
      icon: 'i-lucide-users',
      color: 'primary',
      to: '/en/subsection/example-one'
    },
    {
      label: 'Invite users',
      icon: 'i-lucide-user-plus',
      // children: [
      //   {
      //     label: 'Invite by email',
      //     icon: 'i-lucide-send-horizontal'
      //   },
      //   {
      //     label: 'Invite by link',
      //     icon: 'i-lucide-link'
      //   }
      // ]
    },
    {
      label: 'New team',
      icon: 'i-lucide-plus'
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
        label="API"
        color="neutral"
        variant="outline"
        block
        icon="i-lucide-chevron-down"
      />
    </UDropdownMenu>
  </UFieldGroup>
</template>