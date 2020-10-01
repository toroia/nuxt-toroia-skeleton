<template lang="pug">
    v-tooltip(v-if="button.tooltip" top)
        template(#activator="{ onTooltip }")
            v-dialog(v-model="dialog" width="600px")
                template(#activator="{on, attrs}")
                    v-btn(
                        :color="colorize(isActive, button)"
                        v-on="on" v-bind="attrs"
                        small icon
                    )
                        v-icon(small v-text="button.icon")
                v-card
                    v-toolbar(color="primary") Importer une image
                    v-card-text
                        tor-field-text(label="Url de l'image" v-model="src")
                    v-card-actions
                        v-btn(small icon @click="commander(commands, button, {src})") Importer
        span(v-text="button.tooltip")
</template>
